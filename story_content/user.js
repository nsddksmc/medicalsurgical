function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67MufT1mGU4":
        Script1();
        break;
      case "6bdnrL8EqNK":
        Script2();
        break;
      case "6lNfbRKu5pg":
        Script3();
        break;
      case "6mJyr1ej4eB":
        Script4();
        break;
      case "6LMgFRnmsMa":
        Script5();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  window.print();
}

