// Generar cadena de bloques dinámicamente
const chain = document.getElementById('blockchain-chain');
const blocks = [
  { id: 1, hash: "0000a1b2..." },
  { id: 2, hash: "0000c3d4..." },
  { id: 3, hash: "0000e5f6..." }
];

blocks.forEach(block => {
  const div = document.createElement('div');
  div.className = 'block';
  div.innerHTML = `<div>Bloque #${block.id}</div><div>Hash: ${block.hash}</div>`;
  div.addEventListener('click', () => {
    alert(`Bloque #${block.id}\nHash: ${block.hash}\n¡Inmutable y seguro!`);
  });
  chain.appendChild(div);
});
