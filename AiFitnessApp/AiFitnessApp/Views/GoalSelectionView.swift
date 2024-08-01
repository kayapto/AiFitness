import SwiftUI

struct GoalSelectionView: View {
    @State private var selectedGoal: String = "Weight Loss"
    
    var body: some View {
        Picker("Select your goal", selection: $selectedGoal) {
            Text("Weight Loss").tag("Weight Loss")
            Text("Muscle Gain").tag("Muscle Gain")
            Text("Endurance").tag("Endurance")
        }
        .pickerStyle(SegmentedPickerStyle())
        .padding()
        // Navigation to ScheduleView
    }
}
