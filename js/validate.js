$(function() {
	$( "#datepicker" ).datepicker({
		changeMonth: true,
		changeYear: true
        });
        $( "input:submit, input:button, a, button", ".demo" ).button();
        $( "a", ".demo" ).click(function() { return false; });
        $( "#1" ).dialog({
                autoOpen: true,
                width: 370,
                height: 230,
                position: [25,20],
                resizable: 'false',
                draggable: false,
                closeOnEscape: false,
                open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
        });
        $( "#2" ).dialog({
                autoOpen: true,
                width: 400,
                height: 510,
                position: [425,20],
                resizable: 'false',
                draggable: false,
                closeOnEscape: false,
                open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
        });
        $( "#3" ).dialog({
                autoOpen: true,
                width: 370,
                height: 270,
                position: [25,260],
                resizable: 'false',
                draggable: false,
                closeOnEscape: false,
                open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
        });
        $( "#login" ).dialog({
                autoOpen: true,
                width: 300,
                height: 170,
                position: 'center',
                resizable: 'false',
                draggable: false,
                closeOnEscape: false,
                open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
        });        
});

function checkFields(contact) {
	
	// check to see if the field is blank
if (contact.name.value == "")
{
alert("You must enter a name.");
contact.name.focus();
return (false);
}

// require at least 4 characters be entered
if (contact.name.value.length < 4)
{
alert("Please enter at least 4 characters in the \"name\" field.");
contact.name.focus();
return (false);
}

// allow ONLY alphanumeric keys, no symbols or punctuation
// this can be altered for any "checkOK" string you desire
var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var checkStr = contact.name.value;
var allValid = true;
for (i = 0;  i < checkStr.length;  i++)
{
ch = checkStr.charAt(i);
for (j = 0;  j < checkOK.length;  j++)
if (ch == checkOK.charAt(j))
break;
if (j == checkOK.length)
{
allValid = false;
break;
}
}
if (!allValid)
{
alert("Please enter only letter and numeric characters in the \"name\" field.");
contact.name.focus();
return (false);
}

// check if numbers field is blank
if (contact.telephone.value == "")
{
alert("Please enter a value for the \"Telephone No.\" field.");
contact.telephone.focus();
return (false);
}
	
	// only allow numbers to be entered
var checkOK = "0123456789";
var checkStr = contact.telephone.value;
var allValid = true;
var allNum = "";
for (i = 0;  i < checkStr.length;  i++)
{
ch = checkStr.charAt(i);
for (j = 0;  j < checkOK.length;  j++)
if (ch == checkOK.charAt(j))
break;
if (j == checkOK.length)
{
allValid = false;
break;
}
if (ch != ",")
allNum += ch;
}
if (!allValid)
{
alert("Please enter only digit characters in the \"Telephone No.\" field.");
contact.telephone.focus();
return (false);
}

// check if email field is blank
if (contact.email.value == "")
{
alert("Please enter a value for the \"Email\" field.");
contact.email.focus();
return (false);
}


// test if valid email address, must have @ and .
var checkEmail = "@.";
var checkStr = contact.email.value;
var EmailValid = false;
var EmailAt = false;
var EmailPeriod = false;
for (i = 0;  i < checkStr.length;  i++)
{
ch = checkStr.charAt(i);
for (j = 0;  j < checkEmail.length;  j++)
{
if (ch == checkEmail.charAt(j) && ch == "@")
EmailAt = true;
if (ch == checkEmail.charAt(j) && ch == ".")
EmailPeriod = true;
	  if (EmailAt && EmailPeriod)
		break;
	  if (j == checkEmail.length)
		break;
	}
	// if both the @ and . were in the string
if (EmailAt && EmailPeriod)
{
		EmailValid = true
		break;
	}
}
if (!EmailValid)
{
alert("The \"email\" field must contain an \"@\" and a \".\".");
contact.email.focus();
return (false);
}
// check to see if the event field is blank
if (contact.event.value == "")
{
alert("You must enter an event.");
contact.event.focus();
return (false);
}

// require at least 4 characters be entered
if (contact.event.value.length < 4)
{
alert("Please enter at least 4 characters in the \"name\" field.");
contact.event.focus();
return (false);
}

// check to see if the message field is blank

if (contact.eventdate.value == "")
{
alert("You must enter an eventdate.");
contact.message.focus();
return (false);
}

// check to see if the message field is blank
if (contact.message.value == "")
{
alert("You must enter a message.");
contact.message.focus();
return (false);
}

// allow only 300 characters maximum in the comment field
if (contact.message.value.length > 300)
{
alert("Please enter at most 300 characters in the comment field.");
contact.message.focus();
return (false);
}


}