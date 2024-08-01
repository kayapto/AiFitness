import XCTest
@testable import AiFitnessApp

class GoalSelectionViewModelTests: XCTestCase {
    func testUpdateGoal() {
        let viewModel = GoalSelectionViewModel()
        viewModel.updateGoal(newGoal: "Muscle Gain")
        
        XCTAssertEqual(viewModel.goal, "Muscle Gain")
    }
}
