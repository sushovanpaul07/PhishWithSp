#!/bin/bash
sudo apt update
sudo apt install snapd
sudo snap install ngrok
npm install
npm start
ngrok http 6969
