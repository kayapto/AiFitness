import XCTest
@testable import AiFitnessApp

class PredictionServiceTests: XCTestCase {
    func testPredictSchedule() {
        let service = PredictionService()
        let user = User(weight: 70.0, height: 170.0, age: 25, goal: "Weight Loss")
        
        let schedule = service.predictSchedule(for: user)
        
        XCTAssertFalse(schedule.days.isEmpty)
        XCTAssertEqual(schedule.days["Monday"], ["Running", "Yoga"])
    }
}
