#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Block;

var antiIceBlock = VanillaFactory.createBlock("anti_ice", <blockmaterial:glass>);
antiIceBlock.setLightOpacity(150);
antiIceBlock.setBlockLayer("TRANSLUCENT");
antiIceBlock.setFullBlock(false);
antiIceBlock.setTranslucent(true);
//antiIceBlock.setBlockHardness(5.0);
//antiIceBlock.setBlockResistance(5.0);
//antiIceBlock.setToolClass("pickaxe");
//antiIceBlock.setToolLevel(7);
antiIceBlock.setBlockSoundType(<soundtype:glass>);
//antiIceBlock.setSlipperiness(0.9);

var Sscaf = VanillaFactory.createBlock("steel_scaffolding", <blockmaterial:iron>);
Sscaf.setTranslucent(true);
Sscaf.setBlockLayer("TRANSLUCENT");
Sscaf.setFullBlock(false);
Sscaf.setBlockSoundType(<soundtype:iron>);


antiIceBlock.register();
Sscaf.register();