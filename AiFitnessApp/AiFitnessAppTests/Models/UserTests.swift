import XCTest
@testable import AiFitnessApp

class UserTests: XCTestCase {
    func testUserInitialization() {
        let user = User(weight: 70.0, height: 170.0, age: 25, goal: "Weight Loss")
        XCTAssertEqual(user.weight, 70.0)
        XCTAssertEqual(user.height, 170.0)
        XCTAssertEqual(user.age, 25)
        XCTAssertEqual(user.goal, "Weight Loss")
    }
}
