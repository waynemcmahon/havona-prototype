useGesture({
    //onDrag: ({offset: [dx, dy]}) => {
    onDrag: ({ args: [index], down, movement: [mx], direction: [xDir], velocity}) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right

      if (!down && trigger) gone.add(index);
      set((i) => {
        if (index !== i) return // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero

        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1 // Active cards lift up a bit
        return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
      })

      const moveX = (mx / window.innerHeight) * 100;
      setCardPosition({x: mx})
      console.log(mx);
    },
  },{
      domTarget: imageRef
  })
  return(
    <div className="deckContainer">
          {data.map(e => (
            <animated.div 
            key={e.id} 
            className="deckCard" 
            ref={imageRef}
            style={{              
                left: cardPosition.x,
                top: cardPosition.y,
            }}
              >
              
            </animated.div>     
          ))
          }     
      </div>
  )

} 