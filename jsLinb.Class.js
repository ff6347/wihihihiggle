//Boethos Version 1.4
// The default code is a com class (inherited from linb.Com)
Class('App', 'linb.Com',{
        // Ensure that all the value of "key/value pair" does not refer to external variables
        Instance:{
            // To initialize instance(e.g. properties)
            initialize : function(){
                // To determine whether or not the com will be destroyed, when the first UI control be destroyed
                this.autoDestroy = true;
                // To initialize properties
                this.properties = {};
            },
            // To initialize internal components (mostly UI controls)
            // *** If you're not a skilled, dont modify this function manually ***
            iniComponents : function(){
            // [[code created by jsLinb UI Builder
            var host=this, children=[], append=function(child){children.push(child.get(0))};
            
            append(
                (new linb.UI.Dialog)
                .setHost(host,"mainWindow")
                .setLeft(315)
                .setTop(71)
                .setWidth(260)
                .setHeight(409)
                .setResizer(false)
                .setCaption("Script Window")
                .setMinBtn(false)
                .setMaxBtn(false)
                .onLayout("_mainwindow_onlayout")
                .onResize("_mainwindow_onresize")
                .onMove("_mainwindow_onmove")
                .beforeClose("_ctl_mainWindow_beforeclose")
                .setCustomStyle({"CAPTION":"text-align:center", "BARCMDL":"text-align:center"})
            );
            
            host.mainWindow.append(
                (new linb.UI.Button)
                .setHost(host,"button_run_main_script")
                .setLeft(100)
                .setTop(10)
                .setWidth(140)
                .setCaption("Add Whihihiggle!")
            );
            
            host.mainWindow.append(
                (new linb.UI.Input)
                .setHost(host,"field_amp")
                .setLeft(190)
                .setTop(70)
                .setWidth(50)
                .setLabelCaption("ctl_input15")
            );
            
            host.mainWindow.append(
                (new linb.UI.Input)
                .setHost(host,"field_freq")
                .setLeft(190)
                .setTop(40)
                .setWidth(50)
                .setLabelCaption("ctl_input15")
            );
            
            host.mainWindow.append(
                (new linb.UI.Label)
                .setHost(host,"label_freq")
                .setLeft(10)
                .setTop(40)
                .setWidth(170)
                .setCaption("The Frequenze expr: freq")
            );
            
            host.mainWindow.append(
                (new linb.UI.Label)
                .setHost(host,"label_amp")
                .setLeft(10)
                .setTop(70)
                .setWidth(170)
                .setCaption("amp")
            );
            
            host.mainWindow.append(
                (new linb.UI.Input)
                .setHost(host,"field_octaves")
                .setLeft(190)
                .setTop(100)
                .setWidth(50)
                .setLabelCaption("ctl_input15")
            );
            
            host.mainWindow.append(
                (new linb.UI.Input)
                .setHost(host,"field_seed")
                .setLeft(190)
                .setTop(192)
                .setWidth(50)
                .setLabelCaption("ctl_input15")
            );
            
            host.mainWindow.append(
                (new linb.UI.Label)
                .setHost(host,"label_seed")
                .setLeft(100)
                .setTop(190)
                .setWidth(80)
                .setCaption("seed")
            );
            
            host.mainWindow.append(
                (new linb.UI.Label)
                .setHost(host,"label_octaves")
                .setLeft(10)
                .setTop(100)
                .setWidth(170)
                .setCaption("octaves")
            );
            
            host.mainWindow.append(
                (new linb.UI.Input)
                .setHost(host,"field_time")
                .setLeft(190)
                .setTop(160)
                .setWidth(50)
                .setLabelCaption("ctl_input15")
            );
            
            host.mainWindow.append(
                (new linb.UI.Input)
                .setHost(host,"field_amp_mult")
                .setLeft(190)
                .setTop(130)
                .setWidth(50)
                .setLabelCaption("ctl_input15")
            );
            
            host.mainWindow.append(
                (new linb.UI.Label)
                .setHost(host,"label_amp_mult")
                .setLeft(10)
                .setTop(130)
                .setWidth(170)
                .setCaption("amp_mult")
            );
            
            host.mainWindow.append(
                (new linb.UI.Label)
                .setHost(host,"label_time")
                .setLeft(10)
                .setTop(160)
                .setWidth(170)
                .setCaption("time")
            );
            
            host.mainWindow.append(
                (new linb.UI.Input)
                .setHost(host,"field_looptime")
                .setLeft(190)
                .setTop(252)
                .setWidth(50)
                .setLabelCaption("ctl_input15")
            );
            
            host.mainWindow.append(
                (new linb.UI.Input)
                .setHost(host,"field_pstrz_fps")
                .setLeft(190)
                .setTop(219)
                .setWidth(50)
                .setLabelCaption("ctl_input15")
            );
            
            host.mainWindow.append(
                (new linb.UI.Label)
                .setHost(host,"label_pstrz_fps")
                .setLeft(100)
                .setTop(220)
                .setWidth(80)
                .setCaption("pstrz_fps")
            );
            
            host.mainWindow.append(
                (new linb.UI.Label)
                .setHost(host,"label_looptime")
                .setLeft(100)
                .setTop(253)
                .setWidth(80)
                .setCaption("looptime")
            );
            
            host.mainWindow.append(
                (new linb.UI.SCheckBox)
                .setHost(host,"checkbox_simple")
                .setLeft(10)
                .setTop(10)
                .setWidth(100)
                .setCaption("simple")
            );
            
            host.mainWindow.append(
                (new linb.UI.SCheckBox)
                .setHost(host,"checkbox_addSeed")
                .setLeft(10)
                .setTop(190)
                .setWidth(130)
                .setCaption("addSeed ----")
            );
            
            host.mainWindow.append(
                (new linb.UI.SCheckBox)
                .setHost(host,"checkbox_addPosterize")
                .setLeft(10)
                .setTop(219)
                .setWidth(130)
                .setCaption("addPosterize ----")
            );
            
            host.mainWindow.append(
                (new linb.UI.SCheckBox)
                .setHost(host,"ctl_scheckbox4")
                .setLeft(10)
                .setTop(252)
                .setWidth(100)
                .setCaption(" Loop -----")
            );
            
            host.mainWindow.append(
                (new linb.UI.SCheckBox)
                .setHost(host,"checkbox_doTemporal")
                .setLeft(10)
                .setTop(290)
                .setWidth(230)
                .setCaption("Use Temporal Wiggle")
            );
            
            host.mainWindow.append(
                (new linb.UI.Label)
                .setHost(host,"label_separator")
                .setLeft(10)
                .setTop(280)
                .setWidth(230)
                .setCaption("-------------------------------------")
            );
            
            host.mainWindow.append(
                (new linb.UI.Label)
                .setHost(host,"label_version")
                .setLeft(110)
                .setTop(340)
                .setCaption("version 0.1")
            );
            
            append(
                (new linb.UI.Label)
                .setHost(host,"ctl_slabel3")
                .setLeft(574)
                .setTop(-222)
                .setWidth(180)
                .setZIndex(30)
                .setVisibility("hidden")
                .setCaption("← (Click 'x' for jsx code)")
                .setHAlign("left")
                .setCustomStyle({"KEY":"font-weight:bold;color:#AA5555"})
            );
            
            append(
                (new linb.UI.Div)
                .setHost(host,"ctl_div13")
                .setLeft(4)
                .setTop(-222)
                .setWidth(366)
                .setHeight(16)
                .setVisibility("hidden")
                .setHtml("<span style=\"color: rgb(169, 169, 169);\"><em>CRGreen's AE Script-maker for the linb UI Builder (Version 1.4)</em></span>")
            );
            
            append(
                (new linb.UI.Image)
                .setHost(host,"ctl_image3")
                .setLeft(10)
                .setTop(10)
                .setWidth(218)
                .setHeight(342)
                .setSrc("http://crgreen.com/boethos/linbUsableWidgets.png")
                .onLayout("_ctl_image3_onlayout")
            );
            
            append(
                (new linb.UI.Group)
                .setHost(host,"optionsGroup")
                .setLeft(340)
                .setTop(-400)
                .setWidth(370)
                .setHeight(160)
                .setVisibility("hidden")
                .setCaption("jsx Code Options:")
                .setToggleBtn(false)
            );
            
            host.optionsGroup.append(
                (new linb.UI.RadioBox)
                .setHost(host,"radOps")
                .setDirtyMark(false)
                .setShowDirtyMark(false)
                .setItems([{"id":"p", "caption":"palette/dockable panel"}, {"id":"d", "caption":"dialog"}, {"id":"w", "caption":"window"}])
                .setLeft(21)
                .setTop(10)
                .setWidth(328)
                .setHeight(30)
                .setValue("p")
            );
            
            host.optionsGroup.append(
                (new linb.UI.Input)
                .setHost(host,"winDef")
                .setDirtyMark(false)
                .setLeft(17)
                .setTop(43)
                .setWidth(290)
                .setLabelSize(174)
                .setLabelGap(11)
                .setLabelCaption("Window Definition:")
                .setValue("win")
            );
            
            host.optionsGroup.append(
                (new linb.UI.Input)
                .setHost(host,"builtWin")
                .setDirtyMark(false)
                .setLeft(17)
                .setTop(73)
                .setWidth(290)
                .setLabelSize(174)
                .setLabelGap(11)
                .setLabelCaption("Built Window:")
                .setValue("w")
            );
            
            host.optionsGroup.append(
                (new linb.UI.Input)
                .setHost(host,"mainFunc")
                .setDirtyMark(false)
                .setLeft(17)
                .setTop(103)
                .setWidth(290)
                .setLabelSize(174)
                .setLabelGap(11)
                .setLabelCaption("Main Function:")
                .setValue("buildUI")
            );
            
            return children;
            // ]]code created by jsLinb UI Builder
        }
            ,
            // Give a chance to load other com
            iniExComs : function(com, threadid){
            },
            // Give a chance to determine which UI controls will be appended to parent container
            customAppend : function(parent, subId, left, top){
                // "return false" will cause all the internal UI controls will be added to the parent panel
                return false;
            },
            // This instance's events
            events : {},
            
            /////////////// DO NOT EDIT BELOW /////////////////////
            ///////////////////////////////////////////////////////
            _ctl_mainWindow_beforeclose : function (profile) {
                
                var widgArrayCode = 1;
                var ns = this,
                uictrl = profile.boxing();
                ////////////////main control-gathering here////////////////
                ///////////////////////////////////////////////////////////
                var diaOrPal = "";
                var optionsKids = this.optionsGroup.getChildren().get();
                var rboxReturn = optionsKids[0].boxing().getValue();
                
                if (rboxReturn == "p") {
                    diaOrPal = "palette";//dockable palette or panel
                } else if (rboxReturn == "d") {
                    diaOrPal = "dialog";//modal window
                } else if (rboxReturn == "w") {
                    diaOrPal = "window";//non modal
                }
                
                var winVar = cleanVariableNames( optionsKids[1].boxing().getValue() );
                var wVar = cleanVariableNames( optionsKids[2].boxing().getValue() );
                var buildFuncVar = cleanVariableNames( optionsKids[3].boxing().getValue() );
                ///////////////////////////////////////////////////////////
                
                var diAlias = cleanVariableNames( uictrl.getAlias() );
                var wNa = removeEvilQuotes( uictrl.getCaption() );
                var wWidth = uictrl.getWidth();
                var winCompX = uictrl.getLeft();
                
                var wHeight = uictrl.getHeight() - 28;
                var winCompY = uictrl.getTop() +42 + 15;
                
                var theWidgets = uictrl.getChildren();
                
                var widgLen =  theWidgets.get().length;
                
                var theCode = "";
                var kidsCode = "";
                
                var codeWinWidth = 700;
                var codeWinHeight = 400;
                var kids = [];
                var parentAddn = "";
                var pOfP = "";
                var firstCodeBlock = "var ";// start with this, change to panel version if that option is selected...
                
                if (rboxReturn == "p") {
                    firstCodeBlock = "var " + winVar + " = (" + winVar + " instanceof Panel)\r<br>" +
                    "? " + winVar + "\r<br>" +
                    ": ";
                }
                
                theCode = firstCodeBlock +
                
                winVar + " = new Window('" + diaOrPal + "', '" + wNa + "',[" + winCompX + "," + winCompY + "," +
                (winCompX+wWidth) + "," + (winCompY+wHeight) + "]);\r<br>" +
                
                "var " + wVar + " = " + buildFuncVar + "();\r<br>if (" + wVar + " != null) {\r<br> " + wVar + ".show();\r<br>}\r<br>\r<br>function " +
                buildFuncVar + "() {\r<br> if (" + winVar + " != null) {\r<br>";
                
                theCode = (theCode + ( mainCodeMaker(theWidgets, widgLen, 1) ));
                
                theCode = (theCode + kidsCode);
                
                if (theCode != "") {
                    theCode = (theCode + "}\r<br>return " + winVar + "\r<br>}\r<br>");
                }
                
                top.document.write(theCode);window.stop();//destroys everything by writing to browser, kills window. now it's ready to copy.
                
                ///////////////////////////////////////////////////
                /////////////////These two functions added for v1.3
                // 1st takes care of single quotes infecting the final code output,
                // 2nd reformats badly formatted aliases (removes spaces, etc.)
                function removeEvilQuotes (t) {
                    return t.replace(/'/g, "\\'");
                }
                
                function cleanVariableNames (t) {
                    return t.replace( /^[^a-zA-Z_]+|[^a-zA-Z_0-9]/g, "" );    
                }
                ///////////////////////////////////////////////////
                ///////////////////////////////////////////////////
                
                function mainCodeMaker(widgsOrKids, wsLen, widgArrayCode) {
                    var subCode = "";
                    
                    //linb:
                    var widgetClasses = ["Label", "Button", "CheckBox", "Input", "Input", "ComboInput",
                    "List", "ProgressBar", "Slider", "Slider", "RadioBox", "Block", "Group", "Image"];
                    // once we get the offsest, we use that to grab appropriate control class
                    var controlClasses = ["statictext", "button", "checkbox", "edittext", "edittext",
                    "dropdownlist", "listbox", "progressbar", "slider", "scrollbar", "radiobutton", "panel", "panel", "image"];
                    
                    usableWidgCount = 0;
                    unusedWidgetCount = 0;
                    
                    for (o = 1; o <= wsLen; o++) {
                        var btnHDiffOffset = 4;
                        
                        var paramAddn = "";
                        var addlX = 0;
                        var addlY = 0;
                        var postDefineValueStr = "";
                        var postDefineValue = "false";
                        var childYSizeDIff = 0;
                        var panelXAddn = 0;
                        var panelYAddn = 0;
                        
                        if (widgArrayCode > 1) {
                            thisWidget = widgsOrKids[o-1];
                            btnHDiffOffset = 6;
                            
                        } else {
                            parentAddn = "";
                            pOfP = "";
                            thisWidget = widgsOrKids.get()[o-1];
                        }
                        
                        classKey = ( thisWidget.key.slice(8) );
                        
                        classOffset = widgetClasses.indexOf(classKey);
                        
                        var thisWidgetX = "50";
                        var thisWidgetY = "50";
                        
                        thisWidgetW = thisWidget.boxing().getWidth();
                        thisWidgetH = thisWidget.boxing().getHeight();
                        
                        if (classKey == "Image") {
                            if (thisWidgetW = 'auto') {thisWidgetW = "50";}
                            if (thisWidgetH = 'auto') {thisWidgetH = "50";}
                            thisWidgetCaption = '/precise.png'
                        }
                        
                        var thisWidgetX = thisWidget.boxing().getLeft() + btnHDiffOffset;
                        var thisWidgetY = thisWidget.boxing().getTop();
                        
                        var x2 =  parseInt(thisWidgetX, 10) +  parseInt(thisWidgetW, 10) ;
                        var y2 =  parseInt(thisWidgetY, 10) +  parseInt(thisWidgetH, 10) ;
                        
                        thisAlias = cleanVariableNames( thisWidget.boxing().getAlias() );
                        
                        if (classKey == "Input") {
                            
                            if ( thisWidget.boxing().getType() == "password" ) { paramAddn = ', {noecho: "true"}'; }
                            
                            if (thisWidget.boxing().getProperties("multiLines") == true) {
                                paramAddn = ', {multiline: true}';
                            }
                        }
                        
                        if ( (classKey == "Slider") && (thisWidget.boxing().getType() == "vertical") ) {
                            classOffset = (classOffset + 1);   //switch to scrollbar class
                        }
                        
                        classNa = controlClasses[classOffset];
                        
                        if (classOffset != -1) {
                            
                            if (classNa == "button") {
                                thisWidgetCaption = removeEvilQuotes( thisWidget.boxing().getCaption() );
                                if (widgArrayCode == 1) {
                                    
                                } else if (widgArrayCode == 2) {
                                    addlX = -8;
                                    addlY = -1;
                                    btnHDiffOffset = 2;
                                    childYSizeDIff = 1;
                                    
                                } else if (widgArrayCode == 3) {
                                    addlX = -6;
                                    addlY = 6;
                                }
                                //if it's a button, we window-closing function
                                //(took out adding 'name' for v1.3)
                                subCode = (subCode + " " + winVar + "." + thisAlias + " = " + winVar +
                                    parentAddn + ".add('" + classNa + "', [" +
                                    (thisWidgetX - 2 + addlX) + "," +
                                    (thisWidgetY - 1 + addlY - childYSizeDIff) + "," +
                                    (x2 + 2 + addlX) + "," +
                                    (y2 + btnHDiffOffset - 1 + addlY + childYSizeDIff) + "], '" +
                                    thisWidgetCaption + "'" + ")" + ";\r<br>" +
                                    " " + winVar + "." + thisAlias + ".onClick = function () {this.parent" + pOfP + ".close(1)};\r<br>" );
                                
                            } else if (classKey == "RadioBox") {
                                //using checkbox with 'radio' as Theme instead
                                //for now?
                            } else {
                                // set caption to nothing
                                quoteOrBracket1 = "'";
                                quoteOrBracket2 = quoteOrBracket1;
                                thisWidgetCaption = '';
                                
                                //if caption-friendly, get it
                                if ( ["statictext", "checkbox", "panel"].indexOf(classNa) != -1 ) {
                                    if (classKey != "Block") {
                                        thisWidgetCaption = removeEvilQuotes( thisWidget.boxing().getCaption() );
                                        addlY = 0;
                                    } else {
                                        panelXAddn = 1;
                                        panelYAddn = 1;
                                    }
                                    
                                    if (classNa == "panel") {
                                        //      black, etched, gray, raised, sunken. Default is etched.
                                        //linb: flat,  groove, ridge, outset, inset.
                                        linbBorderType = ( thisWidget.boxing().getProperties("borderType") );
                                        //bummer. no border type for linb "Group"s
                                        if (linbBorderType == undefined) {
                                            linbBorderType = "groove";//just make it etched. dangit. hopefully they'll add borderTypes to Groups.
                                        }
                                        boOS = ["flat", "groove", "ridge", "outset", "inset"].indexOf(linbBorderType);
                                        
                                        postDefineValue = ["black", "etched", "gray", "raised", "sunken"][boOS];
                                        
                                        //LET THEME SUPERCEDE ACTUAL BORDERTYPE SETTING (FOR BOTH BLOCK AND GROUP)
                                        if ( ["black", "etched", "gray", "raised", "sunken"].indexOf(thisWidget.boxing().getTheme()) != -1 ) {
                                            postDefineValue = thisWidget.boxing().getTheme();
                                        }
                                        
                                        paramAddn = ', {borderStyle: "' + postDefineValue + '"}';
                                        kids = thisWidget.boxing().getChildren().get();
                                    }
                                    
                                    if (classNa == "statictext") {
                                        postDefineValue = ( thisWidget.boxing().getProperties("hAlign") );
                                        postDefineValueStr = (" " + winVar + "." + thisAlias + ".justify = '" + postDefineValue + "';\r<br>");
                                    }
                                    
                                    if (classNa == "checkbox") {
                                        
                                        if (widgArrayCode == 1) {
                                            addlX = 9;
                                            addlY = 2;
                                        } else if (widgArrayCode == 2) {
                                            addlX = 2;
                                            addlY = 1;
                                            
                                        } else if (widgArrayCode == 3) {
                                            addlX = 2;
                                            addlY = 9;
                                        }
                                        
                                        if ( ["radio", "radiobutton"].indexOf( thisWidget.boxing().getTheme() ) != -1 ) {
                                            classNa = "radiobutton";
                                        }
                                        postDefineValue = ( thisWidget.boxing().getValue().toString() );
                                        postDefineValueStr = (" " + winVar + "." + thisAlias + ".value = " + postDefineValue + ";\r<br>");
                                    }
                                    if (classKey == "Group") {
                                        addlY = 4;
                                        panelXAddn = 1;
                                        panelYAddn = -1//12-27
                                    }
                                }
                                
                                if ( (classNa == "listbox") || (classNa == "dropdownlist") ) {
                                    if (widgArrayCode == 1) {
                                        if (classNa == "dropdownlist") {addlY = 1;}
                                    } else if (widgArrayCode == 2) {
                                        addlX = -7;
                                        addlY = 0;
                                        
                                    } else if (widgArrayCode == 3) {
                                        
                                    }
                                    
                                    quoteOrBracket1 = "[";
                                    quoteOrBracket2 = "]";
                                    thisWidgetCaption = '"1", "2", "3"';
                                }
                                //put the image in, but comment it out; have user put url in later and uncomment
                                if (classKey == "Image") {                                
                                    subCode = (subCode + "// ");
                                    imSrc = thisWidget.boxing().getSrc();
                                    if (imSrc == "" || imSrc == "/error.gif") {
                                        thisWidgetCaption = '/path/to/file.png';
                                    } else {
                                        thisWidgetCaption = imSrc;
                                    }
                                }
                                
                                if (classNa == "edittext") {
                                    if (widgArrayCode == 1) {
                                    } else if (widgArrayCode == 2) {
                                        addlX = -7;
                                        addlY = -1;
                                        
                                    } else if (widgArrayCode == 3) {
                                        
                                    }
                                    
                                    thisWidgetCaption = removeEvilQuotes( thisWidget.boxing().getValue() );
                                    postDefineValue = ( thisWidget.boxing().getProperties("hAlign") );
                                    if (postDefineValue == '') {postDefineValue = 'left';}
                                    postDefineValueStr = (" " + winVar + "." + thisAlias + ".justify = '" + postDefineValue + "';\r<br>");
                                    
                                }
                                
                                if ( (classNa == "scrollbar") || (classNa == "slider") ) {
                                    //for v1.4, added default (value) and range ( "default, min, max" )
                                    sliVal = thisWidget.boxing().getValue();
                                    
                                    quoteOrBracket1 = (" " + sliVal + ", ");
                                    thisWidgetCaption = "0";
                                    quoteOrBracket2 = ", 100";
                                }
                                
                                if (classNa == "scrollbar") {
                                    
                                    if (widgArrayCode == 1) {
                                        addlX = 1;
                                    } else if (widgArrayCode == 2) {
                                        addlX = -6;
                                        addlY = -1;
                                    } else if (widgArrayCode == 3) {
                                        addlX = -6;
                                        addlY = 8;
                                    }
                                }
                                if (classNa == "slider") {
                                    if (widgArrayCode == 1) {
                                        addlY = -2;
                                    } else if (widgArrayCode == 2) {
                                        addlX = -7;
                                        addlY = -3;
                                        
                                    } else if (widgArrayCode == 3) {
                                        addlX = -7;
                                        addlY = 5;
                                    }
                                }
                                if ( (classKey == "Input") || (classKey == "List")  || (classKey == "Label")) {
                                    
                                    if (widgArrayCode == 1) {
                                        
                                    } else if (widgArrayCode == 2) {
                                        
                                    } else if (widgArrayCode == 3) {
                                        addlX = -7;
                                        addlY = 7;
                                    }
                                }
                                
                                if (classNa == "progressbar") {
                                    quoteOrBracket1 = "";
                                    quoteOrBracket2 = "";
                                    thisWidgetCaption = '0, 100';
                                    if (widgArrayCode == 1) {
                                        
                                    } else if (widgArrayCode == 2) {
                                        addlX = -7;
                                    } else if (widgArrayCode == 3) {
                                        addlX = -7;
                                        addlY = 7;
                                    }
                                }
                                
                                if (classNa == "dropdownlist") {
                                    
                                    if (widgArrayCode == 1) {
                                        
                                    } else if (widgArrayCode == 2) {
                                        
                                    } else if (widgArrayCode == 3) {
                                        addlX = -7;
                                        addlY = 8;
                                    }
                                }
                                
                                if (classNa == "image") {
                                    if (widgArrayCode == 1) {
                                        addlX = 0;
                                        addlY = 1;
                                        
                                    } else if (widgArrayCode == 2) {
                                        addlX = -7;
                                        addlY = 0;
                                        
                                    } else if (widgArrayCode == 3) {
                                        addlX = -7;
                                        addlY = 8;
                                    }
                                }
                                
                                if ( (classNa == "listbox") && (thisWidget.boxing().getTheme() == "treeview") ) {
                                    classNa = "treeview";
                                    postDefineValueStr = ("\r<br>var topLevel = " + winVar + "." + thisAlias + ".add (\"node\", \"Top\");\r<br>" +
                                        "topLevel.One = topLevel.add (\"node\", \"1\");\r<br>" +
                                        "topLevel.One.add (\"item\", \"a\");\r<br>" +
                                        "topLevel.One.add (\"item\", \"b\");\r<br>" +
                                        "topLevel.Two = topLevel.add (\"node\", \"2\");\r<br>" +
                                        "topLevel.Two.add (\"item\", \"a\");\r<br>" +
                                        "topLevel.Two.bee = topLevel.Two.add (\"node\", \"b\");\r<br>" +
                                        "topLevel.Two.bee.add (\"item\", \"alpha\");\r<br>" +
                                        "topLevel.Two.bee.add (\"item\", \"beta\");\r<br>" +
                                        "topLevel.Two.add (\"item\", \"c\");\r<br>\r<br>");
                                    quoteOrBracket1 = "";
                                    quoteOrBracket2 = "";
                                    thisWidgetCaption = 'undefined';
                                }
                                
                                subCode = (subCode + " " + winVar + "." + thisAlias + " = " + winVar + parentAddn + ".add('" + classNa + "', [" +
                                    (thisWidgetX + addlX) + "," +
                                    (thisWidgetY + addlY) + "," +
                                    (x2 + addlX + panelXAddn) + "," +
                                    (y2 + addlY + panelYAddn) + "], " +
                                    quoteOrBracket1 + thisWidgetCaption + quoteOrBracket2 + paramAddn + ");\r<br>" + postDefineValueStr );
                                
                                ///////    THE KIDS THE KIDS THE KIDS    ////////////
                                if ( (kids.length > 0) && (widgArrayCode == 1)) {
                                    //has to be one of these if classNa is panel
                                    if (classKey == "Block") {
                                        kidsArrayCode = 2;
                                    } else if (classKey == "Group") {
                                        kidsArrayCode = 3;
                                    }
                                    
                                    lastOh = o;
                                    parentAddn = ("." + thisAlias);
                                    pOfP = ".parent";
                                    kidsCode = (kidsCode + (mainCodeMaker(kids, kids.length, kidsArrayCode)));
                                    o = lastOh;
                                    widgArrayCode = 1;
                                    kidsArrayCode = 1;
                                    kids = [];
                                }
                                /////////////////////////////////////////////////////
                            }//class name if
                        } else {
                            //nada
                            unusedWidgetCount = (unusedWidgetCount + 1);
                        }//if known class (if classOffset does not eq -1)
                        usableWidgCount = (usableWidgCount + 1);
                        
                    }//for [each widget] loop/////////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////////////////////
                    
                    if (unusedWidgetCount > 0) {
                        
                        s = "s";
                        if (unusedWidgetCount == 1) {s = "";}
                        alert("Warning: " + unusedWidgetCount + " unused widget" + s + "!");
                    }
                    
                    if (usableWidgCount > 0) {
                        
                    } else {
                        alert("No usable widgets.");
                    }
                    return subCode;
                    
                }
                ///////////////////////////////////////////////////////////////
                
            },
            _mainwindow_onmove : function (profile, left, top, right, bottom) {
                ///*
                var ns = this, uictrl = profile.boxing();
                var lblTop = ( uictrl.getTop() + 5 );
                var lblLeft = ( uictrl.getWidth() + uictrl.getLeft() + 7 );
                this.ctl_slabel3.setLeft(lblLeft);
                this.ctl_slabel3.setTop(lblTop);
                this.ctl_slabel3.setVisibility('visible', false);
                this.optionsGroup.setLeft(lblLeft + 10);
                this.optionsGroup.setTop(lblTop+ 22);
                this.optionsGroup.setVisibility('visible', false);
                //*/
            },
            
            _mainwindow_onresize : function (profile, width, height) {
                ///*
                var ns = this, uictrl = profile.boxing();
                var lblTop = ( uictrl.getTop() + 5 );
                var lblLeft = ( uictrl.getWidth() + uictrl.getLeft() + 7 );
                this.ctl_slabel3.setLeft(lblLeft);
                this.ctl_slabel3.setTop(lblTop);
                this.ctl_slabel3.setVisibility('visible', false);
                this.optionsGroup.setLeft(lblLeft + 10);
                this.optionsGroup.setTop(lblTop+ 22);
                this.optionsGroup.setVisibility('visible', false);
                //*/
            },
            
            _mainwindow_onlayout : function (profile) {
                var ns = this, uictrl = profile.boxing();
                var childrenOfMain;
                this.ctl_div13.setVisibility('visible', false);
                this.ctl_div13.setTop(4);
                childrenOfMain = uictrl.getChildren().get();
                if (childrenOfMain.length > 0) {
                    if ( childrenOfMain[0].boxing().getAlias() == "defaultMessage") {
                        top.location="http://www.crgreen.com/boethos/";
                    } else {
                        alert("You can move the JS UI window here to determine the initial location of it in your host application.");
                    }
                }
            },
            _defaultmessage_onlayout : function (profile) {
                var ns = this, uictrl = profile.boxing();
            },
            _ctl_image3_onlayout : function (profile) {
                var ns = this, uictrl = profile.boxing();
                uictrl.setVisibility('hidden', false);
            }
        }
});



