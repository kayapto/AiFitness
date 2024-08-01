import SwiftUI

struct PersonalDetailsView: View {
    @State private var weight: Double = 70.0
    @State private var height: Double = 170.0
    @State private var age: Int = 25
    
    var body: some View {
        VStack {
            TextField("Weight (kg)", value: $weight, format: .number)
            TextField("Height (cm)", value: $height, format: .number)
            TextField("Age", value: $age, format: .number)
            // Navigation to GoalSelectionView
        }
        .padding()
    }
}

