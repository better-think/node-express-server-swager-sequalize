# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # Box settings
  config.vm.box = "phusion/ubuntu-14.04-amd64"

  # MySQL
  config.vm.network :forwarded_port, guest: 3306, host: 3310

  config.vm.provision "docker", images: ["mysql:5.6.30"], run: "always" do |d|
    d.run(
      "mysql",
      args: "--name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=vagrant -e MYSQL_PASSWORD=vagrant -d -p 3306:3306"
    )
  end

  if Vagrant.has_plugin?("vagrant-triggers")
    # Trigger to display notification when provisioned
    config.trigger.after :up, option: "value" do
      puts "========================="
      puts "Executing vagrant triggers"
      puts "========================="
      puts "create database"
      system("mysql -h 127.0.0.1 -P 3310 -u root --password=root < scripts/create_db.sql")
      puts "create the users table"
      system("mysql -h 127.0.0.1 -P 3310 -u root --password=root < scripts/create_users.sql")
    end
  else
    puts "========================="
    puts "You should install vagrant-triggers by running: vagrant plugin install vagrant-triggers"
    puts "========================="
  end
end
