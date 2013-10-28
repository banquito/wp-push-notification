package com.banquito.myalert;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

import com.parse.Parse;
import com.parse.ParseAnalytics;
import com.parse.ParseInstallation;
import com.parse.PushService;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Parse.initialize(this, "Wqn0fChKZPtOQrKKYFySNRyFT7iIxOV3gYbCtB3t", "JzF6NWK6O7m3Jh8X8knRVSyOl5fhFcYsJWBJvt0y");
        //PushService.setDefaultPushCallback(this, MainActivity.class);
        PushService.subscribe(getApplicationContext(), "all", MainActivity.class);
        ParseAnalytics.trackAppOpened(getIntent());
        ParseInstallation.getCurrentInstallation().saveInBackground();
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
    
}
