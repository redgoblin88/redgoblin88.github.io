#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;

var MotorI = VanillaFactory.createItem("motor_item");
MotorI.maxStackSize = 16;
MotorI.register();