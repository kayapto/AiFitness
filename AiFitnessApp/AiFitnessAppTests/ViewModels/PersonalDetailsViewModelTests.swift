import XCTest
@testable import AiFitnessApp

class PersonalDetailsViewModelTests: XCTestCase {
    func testUpdateUserDetails() {
        let viewModel = PersonalDetailsViewModel()
        viewModel.updateUserDetails(weight: 75.0, height: 180.0, age: 30)
        
        XCTAssertEqual(viewModel.user.weight, 75.0)
        XCTAssertEqual(viewModel.user.height, 180.0)
        XCTAssertEqual(viewModel.user.age, 30)
    }
}
