import { useEffect, useRef } from 'react';
import CursorIcon from './CursorIcon';

export default function CustomCursor() {
  const cursor = useRef();

  useEffect(() => {
    function handleMouseMove(event) {
      if (!cursor.current) return;

      cursor.current.style.left = `${event.clientX}px`;
      cursor.current.style.top = `${event.clientY}px`;
    }

    function handleMouseOver(event) {
      if (!cursor.current) return;

      const isHovering = event.target.closest(
        'a, button, [role="button"], .cursor-interactive',
      );

      cursor.current.classList.toggle('is-hovering', !!isHovering);
    }

    function handleMouseOut(event) {
      if (!cursor.current) return;

      const relatedTarget = event.relatedTarget;

      const isStillHovering = relatedTarget?.closest?.(
        'a, button, [role="button"], .cursor-interactive',
      );

      if (!isStillHovering) {
        cursor.current.classList.remove('is-hovering');
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div ref={cursor} className='custom-cursor hidden md:block'>
      <CursorIcon />
    </div>
  );
}
