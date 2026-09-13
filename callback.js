(() => {
  'use strict';

  const source = new URLSearchParams(window.location.search);
  const destination = new URL('arcarta://auth/line');
  const allowedParameters = ['code', 'state', 'error', 'error_description'];

  for (const key of allowedParameters) {
    const value = source.get(key);
    if (value) destination.searchParams.set(key, value);
  }

  const status = document.getElementById('status');
  const returnLink = document.getElementById('return-link');
  const hasValidResponse =
    destination.searchParams.has('state') &&
    (destination.searchParams.has('code') || destination.searchParams.has('error'));

  if (!hasValidResponse) {
    status.textContent = 'ログイン結果を確認できませんでした。ARCARTAからもう一度お試しください。';
    return;
  }

  const appURL = destination.toString();
  returnLink.href = appURL;
  returnLink.hidden = false;
  window.location.replace(appURL);
})();
