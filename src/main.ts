type GameState = {
  turnNumber: number
  activeSeat: "P1" | "P2"
}

const state: GameState = {
  turnNumber: 1,
  activeSeat: "P1",
}

const app = document.getElementById("app")!

function render() {
  app.innerHTML = `
    <h1>Hex Card RPG</h1>
    <p>Turn: <b>${state.turnNumber}</b></p>
    <p>Active: <b>${state.activeSeat}</b></p>
    <button id="turn">End Turn</button>
  `

  document.getElementById("turn")!.addEventListener("click", () => {
    state.activeSeat = state.activeSeat === "P1" ? "P2" : "P1"
    state.turnNumber++
    render()
  })
}

render()
