import XCTest
@testable import AiFitnessApp

class ChatGPTServiceTests: XCTestCase {
    func testSendMessage() {
        let service = ChatGPTService()
        let expectation = XCTestExpectation(description: "Receive AI response")
        
        service.sendMessage("Hello") { response in
            XCTAssertEqual(response, "This is a response from the AI.")
            expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
}
