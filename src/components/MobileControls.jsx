import { useEffect, useRef } from 'react';

export default function MobileControls({ onMove, onLook }) {
  const joystickRef = useRef(null);
  const lookRef = useRef(null);

  const joystickTouch = useRef(null);
  const lookTouch = useRef(null);

  const joystickCenter = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const joystick = joystickRef.current;
    const look = lookRef.current;

    if (!joystick || !look) return;

    function startJoystick(event) {
      const touch = event.changedTouches[0];

      joystickTouch.current = touch.identifier;

      const rect = joystick.getBoundingClientRect();

      joystickCenter.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }

    function moveJoystick(event) {
      if (joystickTouch.current === null) return;

      const touch = [...event.changedTouches].find(
        (touch) => touch.identifier === joystickTouch.current,
      );

      if (!touch) return;

      event.preventDefault();

      const dx = touch.clientX - joystickCenter.current.x;

      const dy = touch.clientY - joystickCenter.current.y;

      const maxDistance = 45;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const scale = distance > maxDistance ? maxDistance / distance : 1;

      onMove({
        x: (dx * scale) / maxDistance,
        y: (dy * scale) / maxDistance,
      });
    }

    function endJoystick(event) {
      if (joystickTouch.current === null) return;

      const touch = [...event.changedTouches].find(
        (touch) => touch.identifier === joystickTouch.current,
      );

      if (!touch) return;

      joystickTouch.current = null;

      onMove({
        x: 0,
        y: 0,
      });
    }

    function startLook(event) {
      const touch = event.changedTouches[0];

      lookTouch.current = {
        id: touch.identifier,
        x: touch.clientX,
        y: touch.clientY,
      };
    }

    function moveLook(event) {
      if (!lookTouch.current) return;

      const touch = [...event.changedTouches].find(
        (touch) => touch.identifier === lookTouch.current.id,
      );

      if (!touch) return;

      event.preventDefault();

      const dx = touch.clientX - lookTouch.current.x;

      const dy = touch.clientY - lookTouch.current.y;

      lookTouch.current.x = touch.clientX;
      lookTouch.current.y = touch.clientY;

      onLook({
        x: dx,
        y: dy,
      });
    }

    function endLook(event) {
      if (!lookTouch.current) return;

      const touch = [...event.changedTouches].find(
        (touch) => touch.identifier === lookTouch.current.id,
      );

      if (!touch) return;

      lookTouch.current = null;
    }

    joystick.addEventListener('touchstart', startJoystick, { passive: false });

    window.addEventListener('touchmove', moveJoystick, { passive: false });

    window.addEventListener('touchend', endJoystick);

    look.addEventListener('touchstart', startLook, { passive: false });

    window.addEventListener('touchmove', moveLook, { passive: false });

    window.addEventListener('touchend', endLook);

    return () => {
      joystick.removeEventListener('touchstart', startJoystick);

      window.removeEventListener('touchmove', moveJoystick);

      window.removeEventListener('touchend', endJoystick);

      look.removeEventListener('touchstart', startLook);

      window.removeEventListener('touchmove', moveLook);

      window.removeEventListener('touchend', endLook);
    };
  }, [onMove, onLook]);

  return (
    <>
      <div ref={lookRef} className='mobile-look' />

      <div ref={joystickRef} className='mobile-joystick'>
        <div className='mobile-joystick-knob' />
      </div>
    </>
  );
}
