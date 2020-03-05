// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

snapToast.style.display = 'none'
  let secret = document.getElementById('secret')

  let serverUrl = 'https://nxone.co'

  snaps.onsubmit = async (e) => {
    e.preventDefault();



    fetch(`${serverUrl}/api/snaps`, {
      method: 'POST',
      body: new FormData(snaps)
    })
    .then((response) => {
      if (!response.ok) {
        console.log('Network not available')
        // throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((response) => {
      let result = response
      snapToast.style.display = 'flex'
      snapText.value = serverUrl + '/snaps/' + result.url
    })
    .catch((error) => {
      snapToast.style.display = 'flex'
      snapText.value = 'Sorry the server is currently experiencing issues.  Please try again later'
      console.error('There has been a problem with your fetch operation:', error);
    });

  };
  shorts.onsubmit = async (e) => {
    e.preventDefault();



    fetch(`${serverUrl}/api/shorts`, {
      method: 'POST',
      body: new FormData(shorts)
    })
    .then((response) => {
      if (!response.ok) {
        console.log('Network not available')
        // throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((response) => {
      let result = response
      shortToast.style.display = 'flex'
      shortText.value = serverUrl + '/s/' + result.url
    })
    .catch((error) => {
      shortToast.style.display = 'flex'
      shortText.value = 'Sorry the server is currently experiencing issues.  Please try again later'
      console.error('There has been a problem with your fetch operation:', error);
    });

  };
