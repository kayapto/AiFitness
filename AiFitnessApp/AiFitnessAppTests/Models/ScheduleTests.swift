import XCTest
@testable import AiFitnessApp

class ScheduleTests: XCTestCase {
    func testScheduleInitialization() {
        let days = ["Monday": ["Running", "Yoga"]]
        let schedule = Schedule(days: days)
        XCTAssertEqual(schedule.days["Monday"], ["Running", "Yoga"])
    }
}
