player.onChat("hilbert", function () {
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.teleportToPlayer()
    hilbert(5, 1, 2)
})
function hilbert (n: number, a: number, h: number) {
    if (n <= 0) {
        return
    }
    agent.setSlot(1)
    agent.setItem(LAPIS_ORE, h * 4, 1)
    turn(TurnDirection.Right, a)
hilbert(n - 1, 0 - a, h)
    agent.move(FORWARD, h)
    turn(TurnDirection.Left, a);
hilbert(n - 1, a, h)
    agent.move(FORWARD, h)
    hilbert(n - 1, a, h)
    turn(TurnDirection.Left, a);
agent.move(FORWARD, h)
    hilbert(n - 1, 0 - a, h)
    turn(TurnDirection.Right, a);
}
function turn(direction: TurnDirection, a: number) {
    if (a < 0) {
        direction = direction == TurnDirection.Left ? TurnDirection.Right: TurnDirection.Left;
    }
    agent.turn(direction)
}
