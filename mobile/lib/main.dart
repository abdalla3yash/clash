import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(
        const SystemUiOverlayStyle(statusBarColor: Colors.transparent));
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Clash',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      routes: {
        "/": (_) => const Padding(
              padding: EdgeInsets.only(top: 20),
              child: WebviewScaffold(
                url: "https://clashstore.vercel.app",
              ),
            ),
      },
    );
  }
}
