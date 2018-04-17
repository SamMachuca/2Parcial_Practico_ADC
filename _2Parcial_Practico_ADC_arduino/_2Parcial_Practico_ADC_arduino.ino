int numReadings = 10;
int readings[10];
int index = 0;

int sensorMax = 0;
int sensorMin = 0;

void setup()
{
  Serial.begin(9600);

  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);

  sensorMax = analogRead(A0)/100;
  sensorMin = sensorMax;

 int value = analogRead(A0)/100;
  readings[index] = value;
  index++;
  if (index >= numReadings) index = 0;
