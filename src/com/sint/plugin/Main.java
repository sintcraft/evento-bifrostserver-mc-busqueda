package com.sint.plugin;

import com.sint.test;

import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.bukkit.plugin.java.JavaPlugin;

public class Main extends JavaPlugin{
    @Override
    public void onEnable() {
        System.out.println("[EVENTO] Listo!");
    }

    @Override
    public void onDisable() {
        System.out.println("[EVENTO] Desabilitado");
    }
    @Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if(sender instanceof Player){
            System.out.println(sender.getName()+"quiso usar el comando xdd");
        }else{
            if(command.getName().equalsIgnoreCase("mendar-serv")){
                test test = new test();
                if(args[0].equalsIgnoreCase("green")){
                    test.green();
                }else{
                    test.red();
                }
            }
        }



        return false;
    }
}
