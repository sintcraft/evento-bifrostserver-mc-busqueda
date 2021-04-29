package com.sint;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class test {
    private static final String BASE_URL = "https://evento.bifrostserver.tk/";
    public void green(){
      try {
        send("green");
      } catch (IOException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
    }
    public void red(){
      try {
        send("red");
      } catch (IOException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      }
    }
    private static void send(String status) throws IOException {
    RequestBody formBody = new FormBody.Builder()
      .add("password", "password")
      .add("status", status)
      .build();

    Request request = new Request.Builder()
      .url(BASE_URL)
      .post(formBody)
      .build();

    OkHttpClient client = new OkHttpClient();
    Call call = client.newCall(request);
    Response response = call.execute();
    System.out.println(response);
}
}
