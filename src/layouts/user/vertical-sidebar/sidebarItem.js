const sidebarItem = [
    {
        title: 'HOME',
        icon: 'mdi-home-variant',
        to: '/user/home'
    },
    {
        title: '勤務表',
        icon: 'mdi-file-document-outline',
        to: '/user/workschedule'
    },
    {
        title: '月次報告',
        icon: 'mdi-calendar-month',
        to: '/user/monthlyreport'
    },
    {
        title: '勤怠申請',
        icon: 'mdi-check-outline',
        to: '/user/attendancelist'
    },
    {
        title: '週次報告',
        icon: 'mdi-star',
        to: '/user/weeklyreport'
    },
    {
        title: '個人設定',
        icon: 'mdi-cog',
        to: '/user/personalsetting'
    },
    {
        title: 'ログアウト',
        icon: 'mdi-logout',
        to: '/auth/login'
    },
    {
        title: '管理者',
        icon: 'mdi-home-variant',
        to: '/admin/home'
    },
    {
        title: 'ポータルサイト',
        icon: 'mdi-web',
        to: '/portalsite'
    },
    {
        title: '操作ヘルプ',
        icon: 'mdi-help-circle',
        to: '/help'
    }
];

export default sidebarItem;
