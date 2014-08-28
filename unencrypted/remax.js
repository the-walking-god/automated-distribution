var apps = [
  {
    "name": "RE/MAX",
    "Versions": [
      {
        "name": "iOS",
        "links": [
          {
            "link": "itms-services://?action=download-manifest&url=https://apptest.homes.com/remax/v2.0/manifest-v2.0.5.plist",
            "version": "v2.0.5 - universal"
          },
          {
            "link": "itms-services://?action=download-manifest&url=https://apptest.homes.com/remax/v2.0/manifest-v2.0.6.plist",
            "version": "v2.0.6 - universal"
          },
          {
            "link": "itms-services://?action=download-manifest&url=https://apptest.homes.com/remax/v2.0/manifest-v2.0.7.plist",
            "version": "v2.0.7 - NON-UAT"
          }
        ]
      },
      {
        "name": "Android",
        "links": [
          {
            "link": "https://apptest.homes.com/remax/v2.0/android/homes-app-remax-alloy-v2.0.5.apk",
            "version": "v2.0.5"
          },
          {
            "link": "https://apptest.homes.com/remax/v2.0/android/homes-app-remax-alloy-v2.0.6.apk",
            "version": "v2.0.6"
          },
          {
            "link": "https://apptest.homes.com/remax/v2.0/android/homes-app-remax-alloy-v2.0.6.apk",
            "version": "v2.0.7"
          }
        ]
      }
    ]
  }
];if (exports) { exports.apps = apps; }
