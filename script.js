document.querySelectorAll('[data-goal]').forEach(link => {
  link.addEventListener('click', () => {
    const goal = link.dataset.goal;
    if (typeof window.ym === 'function' && window.YA_METRIKA_ID) window.ym(window.YA_METRIKA_ID, 'reachGoal', goal);
  });
});
