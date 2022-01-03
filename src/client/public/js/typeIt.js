new TypeIt("#companionMethods", {
    speed: 100,
    waitUntilVisible: true,
    loop: true,
    loopDelay: 0,
    // breakLines: true	,
    // nextStringDelay: 750
   	
  })
    .type("Currt", { delay: 300 })
    .move(-1)
    // .delete(1)
    .type("en")
    .move(null, { to: "END" })
    .type(": Frontnd")
    .pause(300)
    .move(-2)
    // .delete("1")
    .type("E")
    .move(2)
    .type(" Developer  👋")
    .move(null, { to: "END", delay: 1300 })
    .pause(300)
    .move(null, { to: "END" })
    .delete(40)
    .pause(100)
    // .break({ delay: 500 })
    .type("Going: React Dev 😍")
    .move(null, { to: "END", delay: 1300 })
    .delete(35)
   
    .type("Need: It's Complicated 😅")
    .move(null, { to: "END", delay: 1300 })
    .go();