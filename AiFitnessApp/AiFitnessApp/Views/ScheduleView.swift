import SwiftUI

struct ScheduleView: View {
    var schedule: Schedule
    
    var body: some View {
        List(schedule.days.keys.sorted(), id: \.self) { day in
            Section(header: Text(day)) {
                ForEach(schedule.days[day]!, id: \.self) { activity in
                    Text(activity)
                }
            }
        }
        .navigationTitle("Your Weekly Schedule")
    }
}
