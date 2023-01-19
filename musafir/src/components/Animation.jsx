import React from 'react'
import AnimatedText from 'react-animated-text-content'

const Animation = ({content,animationType,tag}) => {
  return (
    <AnimatedText
  type="words" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType={animationType}
  interval={0.06}
  duration={0.8}
  tag={tag}
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
  backgroundColor="black"
>
  {content}
</AnimatedText>
  )
}

export default React.memo(Animation)