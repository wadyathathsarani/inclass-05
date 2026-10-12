import { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [name, setName] = useState('Your Name');
  const [studentId, setStudentId] = useState('NSBM2026');
  const [email, setEmail] = useState('your.email@students.nsbm.ac.lk');
  const [degree, setDegree] = useState('BSc (Hons) in Computing');
  const [editing, setEditing] = useState(false);
  const [points, setPoints] = useState(120);

  const showActivity = (activity: string) => {
    Alert.alert(activity, `You selected ${activity}.`);
  };

  const addPoints = () => {
    setPoints((previous) => previous + 10);
    Alert.alert('Congratulations!', '10 points added to your profile.');
  };

  const saveProfile = () => {
    setEditing(false);
    Alert.alert('Profile Updated', 'Your profile details have been saved.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#172554" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerSmall}>NSBM STUDENT PORTAL</Text>
            <Text style={styles.headerTitle}>My Profile</Text>
            <Text style={styles.headerSubtitle}>
              Your student identity, all in one place.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.notificationButton}
            onPress={() => showActivity('Notifications')}
          >
            <Text style={styles.notificationIcon}>♧</Text>
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileTop}>
            <View style={styles.avatarBorder}>
              <Image
                source={{
                  uri: 'https://ui-avatars.com/api/?name=Student&size=200&background=DBEAFE&color=1D4ED8',
                }}
                style={styles.avatar}
              />
              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>✓</Text>
              </View>
            </View>

            <View style={styles.profileIdentity}>
              <Text style={styles.welcomeText}>WELCOME BACK</Text>
              <Text style={styles.profileName}>{name}</Text>
              <View style={styles.studentBadge}>
                <Text style={styles.studentBadgeText}>STUDENT</Text>
              </View>
            </View>
          </View>

          <View style={styles.profileDivider} />

          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <Text>🪪</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>STUDENT ID</Text>
              {editing ? (
                <TextInput
                  style={styles.input}
                  value={studentId}
                  onChangeText={setStudentId}
                  placeholder="Student ID"
                />
              ) : (
                <Text style={styles.detailValue}>{studentId}</Text>
              )}
            </View>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <Text>✉️</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>EMAIL ADDRESS</Text>
              {editing ? (
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email address"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              ) : (
                <Text style={styles.detailValue}>{email}</Text>
              )}
            </View>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <Text>🎓</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>DEGREE PROGRAMME</Text>
              {editing ? (
                <TextInput
                  style={styles.input}
                  value={degree}
                  onChangeText={setDegree}
                  placeholder="Degree programme"
                />
              ) : (
                <Text style={styles.detailValue}>{degree}</Text>
              )}
            </View>
          </View>

          <TouchableOpacity
            style={styles.editButton}
            onPress={editing ? saveProfile : () => setEditing(true)}
          >
            <Text style={styles.editButtonText}>
              {editing ? '✓  Save Changes' : '✎  Edit Profile'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Statistics */}
        <Text style={styles.sectionTitle}>Your Overview</Text>
        <Text style={styles.sectionSubtitle}>
          Keep track of your student journey.
        </Text>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: '#EFF6FF' }]}>
            <View style={[styles.statIcon, { backgroundColor: '#DBEAFE' }]}>
              <Text style={styles.statEmoji}>⭐</Text>
            </View>
            <Text style={styles.statNumber}>{points}</Text>
            <Text style={styles.statLabel}>Total Points</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: '#F0FDF4' }]}>
            <View style={[styles.statIcon, { backgroundColor: '#DCFCE7' }]}>
              <Text style={styles.statEmoji}>🏆</Text>
            </View>
            <Text style={styles.statNumber}>03</Text>
            <Text style={styles.statLabel}>Achievements</Text>
          </View>

          <View style={[styles.statCard, { backgroundColor: '#FFF7ED' }]}>
            <View style={[styles.statIcon, { backgroundColor: '#FFEDD5' }]}>
              <Text style={styles.statEmoji}>📅</Text>
            </View>
            <Text style={styles.statNumber}>08</Text>
            <Text style={styles.statLabel}>Activities</Text>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <TouchableOpacity onPress={() => showActivity('All Achievements')}>
            <Text style={styles.seeAll}>See all →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.achievementCard}>
          <View style={[styles.achievementIcon, { backgroundColor: '#FEF3C7' }]}>
            <Text style={styles.achievementEmoji}>🌟</Text>
          </View>
          <View style={styles.achievementInfo}>
            <Text style={styles.achievementTitle}>Getting Started</Text>
            <Text style={styles.achievementDescription}>
              Welcome to your student profile!
            </Text>
          </View>
          <Text style={styles.achievementCheck}>✓</Text>
        </View>

        <View style={styles.achievementCard}>
          <View style={[styles.achievementIcon, { backgroundColor: '#DBEAFE' }]}>
            <Text style={styles.achievementEmoji}>📚</Text>
          </View>
          <View style={styles.achievementInfo}>
            <Text style={styles.achievementTitle}>Knowledge Seeker</Text>
            <Text style={styles.achievementDescription}>
              Keep learning and growing.
            </Text>
          </View>
          <Text style={styles.achievementCheck}>✓</Text>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actionsGrid}>
          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => showActivity('My Activities')}
          >
            <Text style={styles.actionEmoji}>📋</Text>
            <Text style={styles.actionTitle}>My Activities</Text>
            <Text style={styles.actionSubtitle}>View your activities</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => showActivity('Student Settings')}
          >
            <Text style={styles.actionEmoji}>⚙️</Text>
            <Text style={styles.actionTitle}>Settings</Text>
            <Text style={styles.actionSubtitle}>Manage preferences</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={() => showActivity('Help Centre')}
          >
            <Text style={styles.actionEmoji}>💬</Text>
            <Text style={styles.actionTitle}>Help Centre</Text>
            <Text style={styles.actionSubtitle}>Get assistance</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCard}
            onPress={addPoints}
          >
            <Text style={styles.actionEmoji}>🎁</Text>
            <Text style={styles.actionTitle}>Earn Points</Text>
            <Text style={styles.actionSubtitle}>Try this feature</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>NSBM GREEN UNIVERSITY</Text>
          <Text style={styles.footerText}>
            Learn today. Lead tomorrow.
          </Text>
          <Text style={styles.footerCopyright}>
            Student Profile App • Version 1.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FC',
  },
  scrollContent: {
    paddingBottom: 35,
  },
  header: {
    backgroundColor: '#172554',
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerSmall: {
    color: '#93C5FD',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 9,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
  },
  headerSubtitle: {
    color: '#CBD5E1',
    fontSize: 12,
    marginTop: 7,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: '#293B68',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: {
    color: '#FFFFFF',
    fontSize: 23,
  },
  notificationDot: {
    position: 'absolute',
    top: 9,
    right: 10,
    width: 8,
    height: 8,
    backgroundColor: '#F97316',
    borderRadius: 4,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 18,
    marginTop: -45,
    borderRadius: 24,
    padding: 20,
    elevation: 5,
    shadowColor: '#0F172A',
    shadowOpacity: 0.07,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  avatarBorder: {
    width: 86,
    height: 86,
    padding: 4,
    borderWidth: 2,
    borderColor: '#BFDBFE',
    borderRadius: 43,
    position: 'relative',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    backgroundColor: '#DBEAFE',
  },
  verifiedBadge: {
    position: 'absolute',
    right: -1,
    bottom: 0,
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#16A34A',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifiedText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 12,
  },
  profileIdentity: {
    flex: 1,
  },
  welcomeText: {
    color: '#64748B',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  profileName: {
    color: '#172554',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 5,
  },
  studentBadge: {
    backgroundColor: '#DBEAFE',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 7,
    marginTop: 8,
  },
  studentBadgeText: {
    color: '#1D4ED8',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },
  profileDivider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 19,
    gap: 12,
  },
  detailIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    color: '#94A3B8',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 5,
  },
  detailValue: {
    color: '#1E293B',
    fontSize: 13,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: '#1E293B',
    fontSize: 13,
  },
  editButton: {
    backgroundColor: '#1D4ED8',
    borderRadius: 13,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 3,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  sectionTitle: {
    color: '#172554',
    fontSize: 19,
    fontWeight: '800',
    marginHorizontal: 20,
    marginTop: 27,
  },
  sectionSubtitle: {
    color: '#94A3B8',
    fontSize: 12,
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 15,
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    gap: 9,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 15,
    paddingHorizontal: 7,
    alignItems: 'center',
  },
  statIcon: {
    width: 37,
    height: 37,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  statEmoji: {
    fontSize: 18,
  },
  statNumber: {
    color: '#172554',
    fontSize: 21,
    fontWeight: '900',
  },
  statLabel: {
    color: '#64748B',
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 21,
  },
  seeAll: {
    color: '#2563EB',
    fontWeight: '700',
    fontSize: 12,
    marginTop: 27,
  },
  achievementCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 18,
    marginTop: 12,
    padding: 15,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  achievementIcon: {
    width: 47,
    height: 47,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementEmoji: {
    fontSize: 23,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    color: '#1E293B',
    fontWeight: '800',
    fontSize: 13,
  },
  achievementDescription: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 5,
  },
  achievementCheck: {
    color: '#16A34A',
    fontSize: 19,
    fontWeight: '900',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
    marginTop: 14,
    gap: 10,
  },
  actionCard: {
    width: '48%',
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    minHeight: 125,
    elevation: 1,
  },
  actionEmoji: {
    fontSize: 25,
    marginBottom: 13,
  },
  actionTitle: {
    color: '#172554',
    fontSize: 13,
    fontWeight: '800',
  },
  actionSubtitle: {
    color: '#94A3B8',
    fontSize: 10,
    marginTop: 6,
  },
  footer: {
    marginTop: 30,
    marginHorizontal: 18,
    padding: 22,
    backgroundColor: '#172554',
    borderRadius: 20,
    alignItems: 'center',
  },
  footerTitle: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 12,
    letterSpacing: 1.5,
  },
  footerText: {
    color: '#BFDBFE',
    fontSize: 12,
    marginTop: 8,
  },
  footerCopyright: {
    color: '#94A3B8',
    fontSize: 10,
    marginTop: 12,
  },
});