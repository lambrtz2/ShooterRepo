﻿#pragma strict

private var score: int = 0;
private var level: int = 1;
private var gameOver: boolean = false;
private var remainingEnemy: int;
private var currentEnemy: int;
public var increaseRate: int = 1;
public var moveSpeedIncRate: float = 0.5f;
public var shootRateIncRate: float = 0.2f;
public var spawnRateIncRate: float = 0.5f;
public var initShootRate: float = 3.0f;
public var initMoveSpeed: float = 0.5f;
public var initSpawnRate: float = 3.0f;

function EnemyHit() {
	remainingEnemy--;
	score += 100 * level;
	if (remainingEnemy <= 0) {		
		level++;
		currentEnemy = currentEnemy + increaseRate;
		remainingEnemy = currentEnemy;
		
		if (initMoveSpeed < 8) {
			initMoveSpeed += moveSpeedIncRate;
		}		
		if (initShootRate > 0.5) {
			initShootRate -= shootRateIncRate;
		}
		if (initSpawnRate > 0.5) {
			initSpawnRate -= spawnRateIncRate;
		}
 	}
 }
 
 function OnGUI() {
	if (gameOver) {		
    	GUI.Box(Rect(362,150,200,250),"Game Over!");
	    GUI.Label (Rect (372, 200, 120, 20), "Level: " + level);
	    GUI.Label (Rect (372, 230, 120, 20), "Score: " + score);
	    
		if (GUI.Button(Rect(412,270,100,50), "Retry")) {
			Application.LoadLevel(1);
		}
		else if (GUI.Button(Rect(412,335,100,50), "Quit")) {
			Application.LoadLevel(0);
		}
	}
	else {
		if (GUI.Button(Rect(5,5,50,20), "Back")) {
			Application.LoadLevel(0);
		}
	    GUI.Label (Rect (800, 5, 120, 20), "Level: " + level);
	    GUI.Label (Rect (350, 5, 120, 20), "Score: " + score);
	}
}
