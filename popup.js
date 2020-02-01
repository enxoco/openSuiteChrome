// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');
shortToast.style.display = 'none'
snapToast.style.display = 'none'
  let secret = document.getElementById('secret')

  let serverUrl = 'http://127.0.0.1:3334'
  const snapsUrl = `${serverUrl}/api/snaps/`;

  snaps.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(`${serverUrl}/api/snaps/`, {
      method: 'POST',
      body: new FormData(snaps)
    });

    let result = await response.json();

    snapToast.style.display = 'flex'
    snapText.value = serverUrl + '/l/' + result.url

  };
  shorts.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(`${serverUrl}/api/shorts/`, {
      method: 'POST',
      body: new FormData(shorts)
    });

    let result = await response.json();

    shortToast.style.display = 'flex'
    shortText.value = serverUrl + '/s/' + result.url

  };


chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});



// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };
