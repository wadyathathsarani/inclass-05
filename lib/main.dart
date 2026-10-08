import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'My Profile',
      theme: ThemeData(
        useMaterial3: true,
        fontFamily: 'Roboto',
        scaffoldBackgroundColor: const Color(0xFFF6F7FC),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF6254D8),
        ),
      ),
      home: const ProfileScreen(),
    );
  }
}

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  int _points = 0;

  static const Color primary = Color(0xFF6254D8);
  static const Color dark = Color(0xFF1C2440);

  void _incrementPoints() {
    setState(() {
      _points++;
    });

    ScaffoldMessenger.of(context).hideCurrentSnackBar();

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: const Text('You earned 1 point!'),
        backgroundColor: primary,
        behavior: SnackBarBehavior.floating,
        duration: const Duration(seconds: 1),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(14),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF6F7FC),
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            children: [
              _buildProfileHeader(),

              const SizedBox(height: 72),

              _buildProfileName(),

              const SizedBox(height: 25),

              _buildPointsCard(),

              const SizedBox(height: 28),

              _buildPersonalInformation(),

              const SizedBox(height: 35),
            ],
          ),
        ),
      ),
    );
  }

  // =========================================================
  // PROFILE HEADER
  // =========================================================

  Widget _buildProfileHeader() {
    return SizedBox(
      height: 225,
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          Container(
            height: 175,
            width: double.infinity,
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                colors: [
                  Color(0xFF3647A8),
                  Color(0xFF6254D8),
                  Color(0xFF9A79EC),
                ],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.only(
                bottomLeft: Radius.circular(34),
                bottomRight: Radius.circular(34),
              ),
            ),
            child: Stack(
              children: [
                Positioned(
                  right: -35,
                  top: -75,
                  child: CircleAvatar(
                    radius: 115,
                    backgroundColor:
                    Colors.white.withOpacity(0.07),
                  ),
                ),
                Positioned(
                  left: -55,
                  bottom: -85,
                  child: CircleAvatar(
                    radius: 100,
                    backgroundColor:
                    Colors.white.withOpacity(0.05),
                  ),
                ),
                const Positioned(
                  left: 24,
                  top: 25,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'My Profile',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 25,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(height: 6),
                      Text(
                        'Your personal dashboard',
                        style: TextStyle(
                          color: Colors.white70,
                          fontSize: 13,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

          // Avatar
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: Center(
              child: Container(
                padding: const EdgeInsets.all(5),
                decoration: BoxDecoration(
                  color: Colors.white,
                  shape: BoxShape.circle,
                  boxShadow: [
                    BoxShadow(
                      color: primary.withOpacity(0.18),
                      blurRadius: 24,
                      offset: const Offset(0, 8),
                    ),
                  ],
                ),
                child: Stack(
                  children: [
                    const CircleAvatar(
                      radius: 62,
                      backgroundColor: Color(0xFFEDEBFF),
                      child: Icon(
                        Icons.person_rounded,
                        size: 76,
                        color: primary,
                      ),
                    ),
                    Positioned(
                      right: 3,
                      bottom: 3,
                      child: Container(
                        padding: const EdgeInsets.all(5),
                        decoration: BoxDecoration(
                          color: const Color(0xFF22C55E),
                          shape: BoxShape.circle,
                          border: Border.all(
                            color: Colors.white,
                            width: 3,
                          ),
                        ),
                        child: const Icon(
                          Icons.check_rounded,
                          color: Colors.white,
                          size: 16,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  // =========================================================
  // PROFILE NAME
  // =========================================================

  Widget _buildProfileName() {
    return const Column(
      children: [
        Text(
          'Wadya Thathsarani',
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 25,
            fontWeight: FontWeight.bold,
            color: dark,
            letterSpacing: -0.5,
          ),
        ),
        SizedBox(height: 7),
        Text(
          'Welcome to your personal space',
          style: TextStyle(
            fontSize: 13,
            color: Color(0xFF8B95A7),
          ),
        ),
      ],
    );
  }

  // =========================================================
  // POINTS CARD
  // =========================================================

  Widget _buildPointsCard() {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 22),
      padding: const EdgeInsets.all(21),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [
            Color(0xFF242B60),
            Color(0xFF5147AA),
          ],
        ),
        borderRadius: BorderRadius.circular(24),
        boxShadow: [
          BoxShadow(
            color: primary.withOpacity(0.20),
            blurRadius: 20,
            offset: const Offset(0, 9),
          ),
        ],
      ),
      child: Row(
        children: [
          Container(
            width: 55,
            height: 55,
            decoration: BoxDecoration(
              color: Colors.white.withOpacity(0.12),
              borderRadius: BorderRadius.circular(17),
            ),
            child: const Icon(
              Icons.workspace_premium_rounded,
              size: 32,
              color: Color(0xFFFFD66B),
            ),
          ),
          const SizedBox(width: 15),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'My Reward Points',
                  style: TextStyle(
                    fontSize: 13,
                    color: Colors.white70,
                  ),
                ),
                const SizedBox(height: 5),
                Text(
                  '$_points Points',
                  style: const TextStyle(
                    fontSize: 25,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
              ],
            ),
          ),
          Material(
            color: Colors.white,
            borderRadius: BorderRadius.circular(14),
            child: InkWell(
              onTap: _incrementPoints,
              borderRadius: BorderRadius.circular(14),
              child: const Padding(
                padding: EdgeInsets.all(12),
                child: Icon(
                  Icons.add_rounded,
                  size: 25,
                  color: primary,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  // =========================================================
  // PERSONAL INFORMATION
  // =========================================================

  Widget _buildPersonalInformation() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Row(
            children: [
              Icon(
                Icons.account_circle_outlined,
                color: primary,
                size: 23,
              ),
              SizedBox(width: 9),
              Text(
                'Personal Information',
                style: TextStyle(
                  fontSize: 19,
                  fontWeight: FontWeight.bold,
                  color: dark,
                ),
              ),
            ],
          ),

          const SizedBox(height: 18),

          const ProfileInfoCard(
            icon: Icons.person_outline_rounded,
            label: 'FULL NAME',
            value: 'Wadya Thathsarani',
            iconColor: Color(0xFF6254D8),
            iconBackground: Color(0xFFEDEBFF),
          ),

          const SizedBox(height: 13),

          const ProfileInfoCard(
            icon: Icons.email_outlined,
            label: 'EMAIL ADDRESS',
            value: 'gwtsamararathna@students.nsbm.ac.lk',
            iconColor: Color(0xFF0D9488),
            iconBackground: Color(0xFFCCFBF1),
          ),

          const SizedBox(height: 13),

          const ProfileInfoCard(
            icon: Icons.verified_user_outlined,
            label: 'ACCOUNT STATUS',
            value: 'Active Account',
            iconColor: Color(0xFF16A34A),
            iconBackground: Color(0xFFDCFCE7),
          ),
        ],
      ),
    );
  }
}

// ============================================================
// REUSABLE PROFILE INFORMATION CARD
// ============================================================

class ProfileInfoCard extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;
  final Color iconColor;
  final Color iconBackground;

  const ProfileInfoCard({
    super.key,
    required this.icon,
    required this.label,
    required this.value,
    required this.iconColor,
    required this.iconBackground,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(
        horizontal: 16,
        vertical: 18,
      ),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(
          color: const Color(0xFFEDF0F6),
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.025),
            blurRadius: 15,
            offset: const Offset(0, 5),
          ),
        ],
      ),
      child: Row(
        children: [
          Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(
              color: iconBackground,
              borderRadius: BorderRadius.circular(15),
            ),
            child: Icon(
              icon,
              color: iconColor,
              size: 24,
            ),
          ),

          const SizedBox(width: 15),

          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: const TextStyle(
                    fontSize: 10,
                    fontWeight: FontWeight.w700,
                    color: Color(0xFF9AA3B2),
                    letterSpacing: 1,
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  value,
                  softWrap: true,
                  style: const TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF26324A),
                  ),
                ),
              ],
            ),
          ),

          const SizedBox(width: 8),

          const Icon(
            Icons.check_circle_outline_rounded,
            color: Color(0xFFCBD5E1),
            size: 19,
          ),
        ],
      ),
    );
  }
}