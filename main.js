document.addEventListener('DOMContentLoaded', function() {
  const textoCopiar = document.getElementById('texto-copiar');
  const notificacaoCopiado = document.getElementById('notificacao-copiado');

  textoCopiar.addEventListener('click', function() {
    const campoTextoTemporario = document.createElement('textarea');
    campoTextoTemporario.value = textoCopiar.textContent;
    document.body.appendChild(campoTextoTemporario);
    campoTextoTemporario.select();

    try {
      const copiado = document.execCommand('copy');
      if (copiado) {
        // Mostrar a notificação temporariamente
        notificacaoCopiado.style.opacity = 1;
        setTimeout(function() {
          notificacaoCopiado.style.opacity = 0;
        }, 2000); // A notificação desaparecerá após 2 segundos (2000 milissegundos)
      }
    } catch (err) {
      console.error('Erro ao copiar o texto:', err);
    }

    document.body.removeChild(campoTextoTemporario);
  });
});
