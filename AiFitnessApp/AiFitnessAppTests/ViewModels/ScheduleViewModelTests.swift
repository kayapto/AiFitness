import XCTest
@testable import AiFitnessApp

class ScheduleViewModelTests: XCTestCase {
    func testGenerateSchedule() {
        let viewModel = ScheduleViewModel()
        let user = User(weight: 70.0, height: 170.0, age: 25, goal: "Weight Loss")
        
        viewModel.generateSchedule(for: user)
        
        XCTAssertFalse(viewModel.schedule.days.isEmpty)
        XCTAssertEqual(viewModel.schedule.days["Monday"], ["Running", "Yoga"])
    }
}
