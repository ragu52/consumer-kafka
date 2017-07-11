#!/bin/bash

sudo apt-get update
sudo apt-get install -y ansible
ansible-galaxy install -r roles.yml -p roles
ansible-playbook kafka-setup.yml
