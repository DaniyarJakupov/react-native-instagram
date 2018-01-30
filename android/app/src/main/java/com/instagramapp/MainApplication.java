package com.instagramapp;

// import android.app.Application;

import com.reactnativenavigation.NavigationApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactPackage;
import com.BV.LinearGradient.LinearGradientPackage; 

// import com.facebook.react.ReactNativeHost;
// import com.facebook.react.shell.MainReactPackage;
// import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication  {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new VectorIconsPackage(),
        new LinearGradientPackage()
      );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

    @Override
    public String getJSMainModuleName() {
      return "index";
    }
}
