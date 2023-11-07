#!/usr/bin/env bash
# Add the Microsoft package repository
#Install .NET SDK or .NET Runtime on Ubuntu 22.04
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
#Install the SDK
sudo apt-get update && \
sudo apt-get install -y dotnet-sdk-7.0
#Install the runtime
sudo apt-get update && \
  sudo apt-get install -y aspnetcore-runtime-7.0
sudo apt-get install -y dotnet-runtime-7.0
