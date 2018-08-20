package com.example.saurav.sample;

import android.content.Intent;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

public class Splash extends AppCompatActivity {
    private static int SPLASH_TIME_OUT = 3000;
   private FirebaseAuth mAuth;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        setContentView(R.layout.activity_splash);
        new Handler().postDelayed(new Runnable() {
            /*
             * Showing splash screen with a timer. This will be useful when you
             * want to show case your app logo / company
             */


            @Override
            public void run() {
                // This method will be executed once the timer is over
                // Start your app main activity
                mAuth = FirebaseAuth.getInstance();

                FirebaseUser user = mAuth.getCurrentUser();

                if(user !=null)

                {
                    finish();
                    startActivity(new Intent(Splash.this, Listview.class));
                }
                else{
                    startActivity(new Intent(Splash.this, MainActivity.class));

                // close this activity
                finish();
                }
            }
        }, SPLASH_TIME_OUT);
    }


}