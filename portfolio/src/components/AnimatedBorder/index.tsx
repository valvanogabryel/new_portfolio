const AnimatedBorder = () => {
  return (
    <>
      <span className='absolute top-0 left-0 bg-gradient-to-r from-transparent to-primary w-full h-[1px] animate-border_top_spin'>
      </span>

      <span className='absolute top-0 right-0 bg-gradient-to-b from-transparent to-primary w-[1px] h-full animate-border_left_spin'>
      </span>

      <span className='absolute bottom-0 left-0 bg-gradient-to-l from-transparent to-primary w-full h-[1px] animate-border_bottom_spin'>
      </span>

      <span className='absolute top-0 left-0 bg-gradient-to-t from-transparent to-primary w-[1px] h-full animate-border_right_spin'>
      </span>
    </>
  );
}

export default AnimatedBorder;