// JavaScript Document

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}



/************BODYFRAME ****************/
/*****Functions for messages **********/
function soupconMessageAjouter(){
	message = "--- Ajouter danger ---";
return message;
}

function qualiteMessageAjouter(){
	message = "--- Choisir qualite ---";
return message;
}

function objetMessageAjouter(){
	message = "--- Choisir objet ---";
return message;
}

function departementMessageAjouter(){
	message = "--- Choisir departement ---";
return message;
}

function modaliteMessageAjouter(){
	message = "--- Choisir modalite ---";
return message;
}

function orientationMessageAjouter(){
	message = "--- Choisir orientation ---";
return message;
}

function codeMessageAjouter(){
	message = "--- Choisir code ---";
return message;
}

function facteurMessageAjouter(){
	message = "--- Choisir facteur ---";
return message;
}

/**functions for max constants *****/

function getMaxNumEnfants(){
	numEnfantsMax = 4;
	return numEnfantsMax;	
}

function getMaxNumAuteurs(){
	numAuteursMax = 3;
	return numAuteursMax;	
}
/*******Champs validations **********/

function notEditable(){
	//var obj = document.getElementById(fieldName);
	//obj.style.

}

function editable(fieldName){
	var obj = document.getElementById(fieldName);
	//obj.style.


}

/************************************/




function changeImage(source)
{
document.images["jsbutton"].src= source;
return true;
}

function changeImageBack(source)
{
 document.images["jsbutton"].src = source;
 return true;
}


function OuvrirPopup(page,nom,option) {
 window.open(page,nom,option);
}

function  adapterButton(nomButton, newLabel)
{
var obj = document.getElementById(nomButton);
	dispHandleShow(nomButton);
	if (newLabel == '')
		newLabel = 'unconnue';
	obj.value = newLabel;


}


function dispHandleSwitch(champ_input) {
var obj = document.getElementById(champ_input);

	if (obj.style.visibility == "hidden" ){
		obj.style.visibility = "visible";
		}
	else{
		obj.style.visibility = "hidden";
		}
  }

function dispHandleShowAway(nameFrame, champ_input) {
var obj = parent.frames[nameFrame].document.getElementById(champ_input);

	if (obj.style.visibility == "hidden" ){
		obj.style.visibility = "visible";
		}
  }
  
function dispHandleHideAway(nameFrame, champ_input) {
var obj = parent.frames[nameFrame].document.getElementById(champ_input);

	if (obj.style.visibility == "visible" ){
		obj.style.visibility = "hidden";
		}
  }
  
function dispHandleShow(champ_input) {
var obj = document.getElementById(champ_input);

	if (obj.style.visibility == "hidden" ){
		obj.style.visibility = "visible";
		}

  }

function dispHandleHide(champ_input) {
var obj = document.getElementById(champ_input);

	if (obj.style.visibility == "visible" ){
		obj.style.visibility = "hidden";
		}
  }
  
function dispShowEnfantDiv()
{
theValue = document.getElementById('numEnfantsHidden').value;
	if (theValue < getMaxNumEnfants() ) {
		theValue++;
		document.getElementById('numEnfantsHidden').value ++;
		showThisEnfant('DivEnfant',theValue);
		//document.getElementById('hiddenActuelEnfant').value = theValue;
		document.getElementById('numEnfants').value = theValue;
		adapterButton('butEnfant'+theValue,'');
		
		//Updater la matrice danger avec le prenom de l'enfant
		document.getElementById('tfDangerEnfant'+theValue).value = document.getElementById('butEnfant'+theValue).value;
	}
	
}

function dispShowAuteurDiv()
{
theValue = document.getElementById('numAuteursHidden').value;
	if (theValue < getMaxNumAuteurs()  ) {
		theValue++;
		document.getElementById('numAuteursHidden').value ++;
		showThisAuteur('DivAuteur',theValue);
	//	document.getElementById('hiddenActuelAuteur').value = theValue;
		document.getElementById('numAuteurs').value = theValue;

		adapterButton('butAuteur'+theValue,'');
		
		//Updater la matrice danger avec le prenom de l'enfant
		document.getElementById('tfDangerAuteur'+theValue).value = document.getElementById('butAuteur'+theValue).value;
	}
}

function dispHandleNewEnfant() {
}

function showThisEnfant(champ_input, index)
{
	for (i=1; i<=getMaxNumEnfants(); i++){
		if ( i == index ){
			dispHandleShow('DivEnfant'+index);
			//document.getElementById('hiddenActuelEnfant').value = index;
			document.getElementById('numEnfants').value = index;
		}
		else 
			dispHandleHide('DivEnfant'+i);
	}
}

function showThisAuteur(champ_input, index)
{
	
	for (i=1; i<=getMaxNumAuteurs(); i++){
		if ( i == index ){
			dispHandleShow('DivAuteur'+index);
			//document.getElementById('hiddenActuelAuteur').value = index;
			document.getElementById('numAuteurs').value = index;

		}
		else 
			dispHandleHide('DivAuteur'+i);
	}
	
}




function validerNotEmptyChamp(nomChamp, maxId) {
	var champi = nomChamp + maxId;
	//alert(champi);
//var obj = parent.frames['mainMainFrame'].document..getElementById(DivEnfant1.champi);
	if ((maxId > 0) && (maxId <= 3)) {
		//alert(champi);
		
		//alert (obj.value);
		/*if (obj.value == ""){
			alert ('Le prenom est necessaire') ;
			return 0;
		}
		else */
			return 1;
	}
return 1;
}

function createOngletEnfant(champNotEmpty){
	//if (validerNotEmptyChamp(champNotEmpty, numEnfants.value) )
		dispShowEnfantDiv();
}

function createOngletAuteur(champNotEmpty){
	//if (validerNotEmptyChamp(champNotEmpty, numEnfants.value) )
		dispShowAuteurDiv();
}

function drawNewWindowfrom(myUrl, myField, myWidth, myHeight, myLeft, myTop){
	//OuvrirPopup(myUrl,'','resizable=no,location=no,width='+myWidth+', height='+myHeight+', left='+myLeft+', top='+myTop+',menubar=no,status=no,scrollbars=no,menubar=no');
	//EcrireCookie(myField.id, myField.value) ;
	EcrireCookie('callingField',myField.id);
	//alert(myField.id);
	winCal=window.open(myUrl,myField.id,"toolbar=0,status=0,menubar=0,fullscreen=no,width="+myWidth+',height='+myHeight+',left='+myLeft+',top='+myTop+',resizable=0');
	docCal=winCal.document;
}

/*function drawNewWindowfrom(myUrl, myFieldName, myCookieVal, myWidth, myHeight, myLeft, myTop){
	EcrireCookie(myFieldName, myCookieVal) ;
	EcrireCookie('callingField',myFieldName);
	winCal=window.open(myUrl,myFieldName,"toolbar=0,status=0,menubar=0,fullscreen=no,width="+myWidth+',height='+myHeight+',left='+myLeft+',top='+myTop+',resizable=0');
	docCal=winCal.document;
}*/

//Writes into the field value the data stored into the cookie for this field. Field.value <---- cookie
function focusOnCallingField(myField, theInvitationMessage)
{
//if (LireCookie(LireCookie('callingField')) != '' )
//	myField.value=LireCookie(LireCookie('callingField'));
	//if(LireCookie(myField.id))
	myField.value=LireCookie(myField.id);
	if ((myField.value == "") || (myField.value == "undefined"))
		myField.value = theInvitationMessage;
	//EffaceCookie(myField.id);
}

//Writes into the multiple field values or options the data stored into the cookie for this field. Field.values <---- cookie
function focusOnCallingFieldMultipleValue(myField, theInvitationMessage)
{
	var bigText='';
	var tableau = new Array();
	var dataCookie = new String();
	
	//default and minimum field size for select field
	myField.size = 1;
	
	if (LireCookie(myField.id) != null){
		dataCookie = LireCookie(myField.id);
	
		if (dataCookie != null){
			//loads cookie data as items within a table
			tableau = dataCookie.split(";");
		
			//We need to clean all the selected option items to load after the new ones
			cleanAllSelectItems(myField);
			LoadAllSelectItems(myField, tableau, theInvitationMessage);
			//changes select field size as the table size changes
			//myField.size = tableau.length-1;
		}
	}		
	myField.size = myField.options.length;
}

//Loads values from table corresponding to a new option item within select
function LoadAllSelectItems(mySelect, table, theInvitationMessage)
{
	var j=0;
	//I'm cleaning twice if it's been done before!.
	cleanAllSelectItems(mySelect);
		
	for (i = 0; i < Number(table.length); i++){
		//I dont need void items here
		if(table[i].length >0){
			mySelect.options[j] = new Option(table[i],table[i]); 
			j++;
		}
	}
	if (Number(table.length) == 1)
		mySelect.options[0] = new Option(theInvitationMessage);

} 

//deletes all options within the select 
function cleanAllSelectItems(mySelect)
{
	for (i = 0; i < Number(mySelect.length); i++){
		mySelect.options[mySelect.length-1] = null;
	}
	mySelect.options.length = 0;
} 

//Stores into the cookie the values from the field.  Field.values----->cookie
function clickOnCallingField(myField, theInvitationMessage){
	EcrireCookie('callingField', myField.id);
	
	//If the values is not the default invitation message on the field
	if (myField.value != theInvitationMessage)
		EcrireCookie(myField.id,myField.value);
	else 
		EcrireCookie(myField.id,'');
}

//Stores into the cookie the values from the field.  Field.values----->cookie
function clickOnCallingFieldMultipleValue(myField, theInvitationMessage){
	var bigValue='';
	EcrireCookie('callingField', myField.id);


	for (i=0; i < myField.options.length; i++) {
			//myField.selectedIndex=i;
   			if ( myField.options[i].text != theInvitationMessage) 
				bigValue = bigValue + myField.options[i].text + ';';		
	} 

	EcrireCookie(myField.id, bigValue);
	//alert(bigValue);
}


function AutoCategorieAge(myAgeField, myCategorieField){
	
	if (myAgeField.value<=4){
		myCategorieField.options.selectedIndex = 0;
	}
	else if ((myAgeField.value > 4) && (myAgeField.value<=10) ){
		myCategorieField.options.selectedIndex = 1;
	}
	else if ((myAgeField.value > 10) && (myAgeField.value<=14) ){
		myCategorieField.options.selectedIndex = 2;
	}
	else if ((myAgeField.value > 14) && (myAgeField.value<=18) ){
		myCategorieField.options.selectedIndex = 3;
	}
	else 
		myCategorieField.options.selectedIndex = 0;
}




/******END BODYFRAME **************/




/*****TOPBODY *********************/

function actionOnButtonAppel(){
	//The button fot appel has been clicked for a new call.
	if (stateButtonAppel=='stop'){

		
		dispHandleShow('DivPreaccueil');
		dispHandleShow('DivBarreAcces');

		
		
		clearAllCookiesButSession();
		//EffaceCookie('callingField');
		EcrireCookie('callingField','');
		uncheckRadio(document.formResultat.rbResultat);
		
		//window.parent.mainMainFrame.document.formEcoutant.reset();
		//window.parent.mainMainFrame.document.formEcoutantFiche2.reset();
		document.getElementById('tfDateAppel').value=obtenirDate();
		//Launches the clock time counter for the appel
		clique(document.getElementById('tfDureeAppel'));
		window.parent.mainMainFrame.location.reload(true);
		document.formResultat.rbResultat[0].checked=true;
		//onNewFicheA();
		//offNewFicheB();,
		//Sets the go flag for the button's global variable 
		stateButtonAppel='go';
		//eval('document.buttonAppel.src=btn1_down.src');
		document.getElementById('buttonAppel').src="images/phoneButtonRouge.jpg";
		

	}
	
	//The button for appel has been clicked again. So it ends the appel
	else if(stateButtonAppel=='go'){
		dispHandleHide('DivPreaccueil');
		dispHandleHide('DivBarreAcces');

		//Stopes the clock time counter for the appel
		stoppe(document.getElementById('tfDureeAppel'));
		//Return the stop flag for the button's global variable 
		stateButtonAppel='stop';
		document.getElementById('buttonAppel').src="images/phoneButton.gif";
		//eval('document.buttonAppel.src=btn1_up.src');
		
		offNewFicheA();offNewFicheB();
	}
}

function preloadImagesButton(){
<!--
// PRELOADING IMAGES
//if (document.images) {
	// btn1_down=new Image(); btn1_down.src="images/phoneButton.gif"; 
	// btn1_up  =new Image(); btn1_up.src  ="images/phoneButtonRouge.jpg"; 
//	}
}

// EVENT HANDLERS
function pressButton(btName) {
// if (document.images)
  eval('document.'+btName+'.src='+btName+'_down.src');
}

function releaseButton(btName) {
// if (document.images)
  eval('document.'+btName+'.src='+btName+'_up.src');
}
//-->


function onLoadBodyFrame(){
	//Button nouvelle appel appuy�
	document.getElementById('numAuteursHidden').value = 0;
	document.getElementById('numEnfantsHidden').value = 0;
	
	if (LireCookie('callingField') == ''){
		onNewFicheA();
		offNewFicheB();
	}
}

function pausecomp(millis)
{
var date = new Date();
var curDate = null;

do { curDate = new Date(); }
while(curDate-date < millis);
}

  
  
  
function dispHandleShow(champ_input) {
var obj = document.getElementById(champ_input);

	if (obj.style.visibility == "hidden" ){
		obj.style.visibility = "visible";
		}

  }


function dispHandleHide(champ_input) {

var obj = document.getElementById(champ_input);

	if (obj.style.visibility == "visible" ){
		obj.style.visibility = "hidden";
	}
}
  
function onNewFicheA()
{
//alert("im here");
//pausecomp(1000);
	dispHandleShowAway('mainMainFrame','DivAuteurHost');

	if (parent.frames['mainMainFrame'].document.getElementById('numAuteursHidden').value > 0)
		for (i=1; i<= getMaxNumAuteurs() ; i++)
			dispHandleShowAway('mainMainFrame','butAuteur'+i);
	//dispHandleShowAway('mainMainFrame','butAuteur'+i);

	dispHandleShowAway('mainMainFrame','DivEnfantHost');
	
	if (parent.frames['mainMainFrame'].document.getElementById('numEnfantsHidden').value > 0)
		for (i=1; i<= getMaxNumEnfants() ; i++)
			dispHandleShowAway('mainMainFrame','butEnfant'+i);
	//dispHandleShowAway('mainMainFrame','butEnfant'+i);
	
	

	dispHandleShowAway('mainMainFrame','DivEcoutant');
	dispHandleShowAway('mainMainFrame','DivAppelant');
	dispHandleShowAway('mainMainFrame','DivAppel');
	dispHandleShowAway('mainMainFrame','DivAlerte');
	dispHandleShowAway('mainMainFrame','DivDanger');
	dispHandleShowAway('mainMainFrame','LayerLineHoriz99');
	dispHandleShowAway('mainMainFrame','LayerLineHoriz1');
	dispHandleShowAway('mainMainFrame','LayerLineHoriz3');
	//dispHandleShowAway('mainMainFrame','LayerLineHoriz89');
	dispHandleShowAway('mainMainFrame','DivComment');

}

function onNewFicheB()
{
	dispHandleShowAway('mainMainFrame','DivCommentFiche2');
	dispHandleShowAway('mainMainFrame','DivEcoutantFiche2');

}

function offNewFicheA()
{
	dispHandleHideAway('mainMainFrame','DivAuteurHost');

	for (i=1; i<= getMaxNumAuteurs() ; i++){
		dispHandleHideAway('mainMainFrame','DivAuteur'+i);
		dispHandleHideAway('mainMainFrame','butAuteur'+i);
	}
	
	dispHandleHideAway('mainMainFrame','DivEnfantHost');
	
	for (i=1; i<= getMaxNumEnfants() ; i++){
		dispHandleHideAway('mainMainFrame','DivEnfant'+i);
		dispHandleHideAway('mainMainFrame','butEnfant'+i);
	}
		

	dispHandleHideAway('mainMainFrame','DivEcoutant');
	dispHandleHideAway('mainMainFrame','DivAppelant');
	dispHandleHideAway('mainMainFrame','DivAppel');
	dispHandleHideAway('mainMainFrame','DivAlerte');
	dispHandleHideAway('mainMainFrame','DivDanger');
	dispHandleHideAway('mainMainFrame','LayerLineHoriz99');
	dispHandleHideAway('mainMainFrame','LayerLineHoriz1');
	dispHandleHideAway('mainMainFrame','LayerLineHoriz3');
	//dispHandleHideAway('mainMainFrame','LayerLineHoriz89');
	dispHandleHideAway('mainMainFrame','DivComment');	
} 

function offNewFicheB()
{
	dispHandleHideAway('mainMainFrame','DivCommentFiche2');
	dispHandleHideAway('mainMainFrame','DivEcoutantFiche2');
	
} 

function onClickNewAppel()
{
	
}


function uncheckRadio(myObjRadio){
	for(x=0; x<myObjRadio.length; x++){
		myObjRadio[x].checked = false;
	}
}
/**********END TOPBODY ********************/


/*********** MENU ******************/

function atentionAuButtonLogin(){
	dispHandleShowAway('leftFrame','DivLogout');
	if (document.formLogin.menuProfil.value=="Ecoutant"){
		dispHandleShowAway('leftFrame','DivUtilisateur');
		dispHandleHideAway('leftFrame','DivCoordonateur');
		ecrireInformationUser(document.formLogin.tfUsername.value, document.formLogin.menuPoste.value,'');
	}
	else if (document.formLogin.menuProfil.value=="Coordonateur"){
		dispHandleHideAway('leftFrame','DivUtilisateur');
		dispHandleShowAway('leftFrame','DivCoordonateur');
	}

	dispHandleHideAway('leftFrame','DivLogin');
}

function atentionAuButtonLogout(){
	dispHandleHideAway('leftFrame','DivLogout');
	dispHandleHideAway('leftFrame','DivUtilisateur');
	dispHandleHideAway('leftFrame','DivCoordonateur');
	dispHandleShowAway('leftFrame','DivLogin');
	clearAllCookies();
	parent.mainFrame.location.href = 'accueil.htm';
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}


function dispHandleShowAway(nameFrame, champ_input) {
var obj = parent.frames[nameFrame].document.getElementById(champ_input);

	if (obj.style.visibility == "hidden" ){
		obj.style.visibility = "visible";
		}
  }
  
function dispHandleHideAway(nameFrame, champ_input) {
var obj = parent.frames[nameFrame].document.getElementById(champ_input);

	if (obj.style.visibility == "visible" ){
		obj.style.visibility = "hidden";
		}
  }
  
  
function EcrireCookie(nom, valeur)
{
	var argv=EcrireCookie.arguments;
	var argc=EcrireCookie.arguments.length;
	var expires=(argc > 2) ? argv[2] : null;
	var path=(argc > 3) ? argv[3] : null;
	var domain=(argc > 4) ? argv[4] : null;
	var secure=(argc > 5) ? argv[5] : false;
	document.cookie=nom+"="+escape(valeur)+
	((expires==null) ? "" : ("; expires="+expires.toGMTString()))+
	((path==null) ? "" : ("; path="+path))+
	((domain==null) ? "" : ("; domain="+domain))+
	((secure==true) ? "; secure" : "");
}

function getCookieVal(offset)
{
	var endstr=document.cookie.indexOf (";", offset);
	if (endstr==-1) endstr=document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function LireCookie(nom)
	{
	var arg=nom+"=";
	var alen=arg.length;
	var clen=document.cookie.length;
	var i=0;
	while (i<clen)
	{
		var j=i+alen;
		if (document.cookie.substring(i, j)==arg) return getCookieVal(j);
		i=document.cookie.indexOf(" ",i)+1;
		if (i==0) break;
		
	}
	return null;
}

function EffaceCookie(nom)
{
	date=new Date;
	date.setFullYear(date.getFullYear()-1);
	EcrireCookie(nom,null,date);
}  

function clearAllCookiesButSession ()
{
	// Get cookie string and separate into individual cookie phrases:
	var cookie_string = "" + document . cookie;
	var cookie_array = cookie_string . split ("; ");

	// Try to delete each cookie:
	for (var i = 0; i < cookie_array . length; ++ i)
	{
		var single_cookie = cookie_array [i] . split ("=");
		if (single_cookie . length != 2)
			continue;
		var name = unescape (single_cookie [0]);
		//delete_cookie (name, path);
if ((name !='user') || (name != 'poste') || (name != 'loggedSince') )
		EffaceCookie(name);
	}
}

function clearAllCookiesButSessionButCallingField ()
{
	// Get cookie string and separate into individual cookie phrases:
	var cookie_string = "" + document . cookie;
	var cookie_array = cookie_string . split ("; ");

	// Try to delete each cookie:
	for (var i = 0; i < cookie_array . length; ++ i)
	{
		var single_cookie = cookie_array [i] . split ("=");
		if (single_cookie . length != 2)
			continue;
		var name = unescape (single_cookie [0]);
		//delete_cookie (name, path);
if ((name !='user') || (name != 'poste') || (name != 'loggedSince') || (name != 'callingField'))
		EffaceCookie(name);
	}
}

function clearAllCookies ()
{
	// Get cookie string and separate into individual cookie phrases:
	var cookie_string = "" + document . cookie;
	var cookie_array = cookie_string . split ("; ");

	// Try to delete each cookie:
	for (var i = 0; i < cookie_array . length; ++ i)
	{
		var single_cookie = cookie_array [i] . split ("=");
		if (single_cookie . length != 2)
			continue;
		var name = unescape (single_cookie [0]);
			EffaceCookie(name);
	}
}

function ecrireInformationUser(username, poste, loggedSince){
	EcrireCookie("user",username);
	EcrireCookie("poste",poste);
	EcrireCookie("loggedSince",loggedSince);	
	
	
	//alert(document.getElementById('tfUsername').value);
	//EcrireCookie("login", document.getElementById("tfUsername
	//").value);
	//EcrireCookie("poste", document.getElementById('menuPoste').value);
}  

function chargerInformationUser(){
	document.getElementById('tfNomEcoute').value=LireCookie("user");
	document.getElementById('tfPosteEcoute').value=LireCookie("poste");
	//document.getElementById('tfNomEcoute').value=LireCookie("loggedSince");	
	
}

/**************END MENU ************************/

/************** QUALITE ************************/

function loadChecked(myObjRB)
{
	for (i=0; i<myObjRB.length; i++) {
		//if (document.formQualite.rbQualite[i].value == LireCookie('qualiteAppelant')) {
		if (myObjRB[i].value == LireCookie(LireCookie('callingField'))) {			
			myObjRB[i].checked = true;
		}
		else
		{
			myObjRB[i].checked = false;
		}
	}
}

//Enables the Checkboxes as we found value coincidences between the values stored in a cookie and the checkboxes values
function loadCheckedCB(myObjCB)
{
	str = new String();
	strSearch = new String();
	arrayStr = new Array();
	str = '';
	cboxIndex = 0;
	myCopyObjCB = myObjCB;
	
	//Its not an unexistant cookie	
	if (LireCookie(LireCookie('callingField')) != null){
		
		str =  LireCookie(LireCookie('callingField'));
		//alert(str);
		
		if ((str != '') && (str != null)){
			arrayStr = str.split(";");
			
			//clears all checkboxes		
			clearAllCheckBoxes(myObjCB);
			//alert(arrayStr.length);

			//iteration on elements from the cookie
			for (i=0; i< Number(arrayStr.length); i++) {
				//if (document.formQualite.rbQualite[i].value == LireCookie('qualiteAppelant')) {
				//There is something to check for
				//alert(arrayStr[i]);
				if (arrayStr[i].length > 0) {
					//Gets the index for the checkbox to check in. Uses the checkbox myObjCB to search over and the datavalue arrayStr[i] to compare with.			
					cboxIndex = findCheckboxWithValue(myCopyObjCB, arrayStr[i]);
					//alert("returned index= "+cboxIndex + " for string= "+ arrayStr[i]);
					//Something found
					if (cboxIndex != -1)
						myObjCB[cboxIndex].checked = true;
				}
			}
		}
	}
}


//Loads  the values stored in a cookie into the checkboxes values
function loadValuesCB(myObjCB)
{
	str = new String();
	arrayStr = new Array();
	
	//Its not an unexistant cookie	
	if (LireCookie(LireCookie('callingField')) != null){
		str =  LireCookie(LireCookie('callingField'));

		if ((str != '') && (str != null)){

			arrayStr = str.split(";");
			if (arrayStr == ';'){
				arrayStr = '';
			}
			
			//iteration on elements from the cookie
			for (i=0; i<arrayStr.length-1; i++) {
				//if (document.formQualite.rbQualite[i].value == LireCookie('qualiteAppelant')) {
				if (arrayStr[i].length > 0 ) {			
					myObjCB[i].value = arrayStr[i];
				}
				else
				{
					myObjCB[i].value = '';
				}
			}
		}
	}
}

function writeChecked(myObjRB)
{
	//clearAllCookiesButSessionButCallingField();
	//EffaceCookie(LireCookie('callingField'));
	EcrireCookie(LireCookie('callingField'), '');
	
	for (i=0; i< myObjRB.length; i++) {
		if (myObjRB[i].checked == true) {
			EcrireCookie(LireCookie('callingField'), myObjRB[i].value);
		}
	}
}

//Stores into a cookie the values coming from selected checkboxes
function writeCheckedCB(myObjCB)
{
	var bigValue='';
	//EffaceCookie(LireCookie('callingField'));
	//clearAllCookiesButSessionButCallingField();
	EcrireCookie(LireCookie('callingField'), '');
	
	for (i=0; i<myObjCB.length; i++) {
		if (myObjCB[i].checked == true) {
			bigValue = bigValue + myObjCB[i].value + ';';
		}
		//else
		//	bigValue = bigValue  + ';' ;
	}
	
	EcrireCookie(LireCookie('callingField'), bigValue);
}



//finds the index for the checkbox who contains a value equal to searchTxt
function findCheckboxWithValue(myObjCB, searchTxt){
	theIndex=-1;
	for(j=0; j < myObjCB.length; j++) {
		//alert(myObjCB[j].value + " j="+j);
		if (myObjCB[j].value == searchTxt)
			theIndex = j;
	}
	return theIndex;
}

//clears all checkboxes		
function clearAllCheckBoxes(myObjCB){
	for(i=0; i < myObjCB.length; i++) {
		myObjCB[i].checked = false;
		//alert("clearing "+i);
	}
}

/*function getCallerFieldObject()
{
	var objField = document.formQualite.rbQualite;
	return objField;	
}*/


/************** END QUALITE ********************/


function obtenirDate()
{
<!-- debut du script

var csChaine;
var nJour, nMois, nAnnee, nHeures , nMinutes, nSecondes;
var dtJour;
csChaine = " ";
dtJour = new Date();
nJour = dtJour.getDate();
//if ( nJour < 10 ) csChaine += "0";

csChaine += nJour;

nMois = dtJour.getMonth() + 1;

if (nMois == 1) csChaine += " Janvier";
else if (nMois == 2) csChaine += " F�vrier";
else if (nMois == 3) csChaine += " Mars";
else if (nMois == 4) csChaine += " Avril";
else if (nMois == 5) csChaine += " Mai";
else if (nMois == 6) csChaine += " Juin";
else if (nMois == 7) csChaine += " Juillet";
else if (nMois == 8) csChaine += " Ao�t";
else if (nMois == 9) csChaine += " Septembre";
else if (nMois == 10) csChaine += " Octobre";
else if (nMois == 11) csChaine += " Novembre";
else if (nMois == 12) csChaine += " D�cembre";

csChaine += " ";

nAnnee = dtJour.getFullYear();

//if (nAnnee <= 99) nAnnee += 1900;
csChaine += nAnnee + " ";
nHeures = dtJour.getHours();

//if (nHeures < 10) csChaine += "0";
csChaine += nHeures + ":";
nMinutes = dtJour.getMinutes();

//if (nMinutes < 10) csChaine += "0";
csChaine += nMinutes + ":";
nSecondes = dtJour.getSeconds();

//if (nSecondes < 10) csChaine += "0";
csChaine += nSecondes;

return  csChaine;
}

function heure(myObjCadran) { 
 temps++; base=temps;
 cs=base % 60;
 base=(temps-cs) / 60;
 s=base % 60;
 m=(base-s) / 60; 
 texte=""; 
 if (m<10) texte=texte+"0"; texte=texte+m+":"; 
 if (s<10) texte=texte+"0"; texte=texte+s+":";
 if (cs<10) texte=texte+"0"; texte=texte+cs;
 myObjCadran.value=texte; 
} 
function commence(myObjCadran) { 
 temps=-1;
 heure(myObjCadran);
 //document.formu.bouton.value="STOP";
 chrono=setInterval("heure(document.getElementById('tfDureeAppel'))",1000); 
} 
function stoppe(myObjCadran) {
 if (chrono!=null) 
 	clearInterval(chrono);
 chrono=null;
 //document.formu.bouton.value="DEPART";
}  
function clique(myObjCadran) {
// if (chrono==null) commence(myObjCadran); else stoppe(myObjCadran);
stoppe(myObjCadran);
commence(myObjCadran);
} 

var chrono=null;
var temps=0;