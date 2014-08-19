#pragma strict

private var remainingEnemy: int;
private var currentEnemy: int;
public var increaseRate: int = 1;
public var moveSpeedIncRate: float = 0.5f;
public var shootRateIncRate: float = 0.2f;
public var spawnRateIncRate: float = 0.5f;
public var initShootRate: float = 3.0f;
public var initMoveSpeed: float = 0.5f;
public var initSpawnRate: float = 3.0f;
private var score: int = 0;
private var level: int = 0;

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
