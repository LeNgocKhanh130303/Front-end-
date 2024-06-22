// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'jquery-datetimepicker';
// import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
// import 'chart.js/auto'; // Import Chart.js
// import 'jquery-waypoints'; // Import Waypoints
// import 'jquery-datetimepicker/jquery.datetimepicker.css';

// const spinner = () => {
//     setTimeout(() => {
//         if ($('#spinner').length > 0) {
//             $('#spinner').removeClass('show');
//         }
//     }, 1);
// };

// const App = () => {
//     useEffect(() => {
//         spinner();

//         // Back to top button
//         $(window).scroll(function () {
//             if ($(this).scrollTop() > 300) {
//                 $('.back-to-top').fadeIn('slow');
//             } else {
//                 $('.back-to-top').fadeOut('slow');
//             }
//         });
//         $('.back-to-top').click(function () {
//             $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
//             return false;
//         });

//         // Sidebar Toggler
//         $('.sidebar-toggler').click(function () {
//             $('.sidebar, .content').toggleClass('open');
//             return false;
//         });

//         // Progress Bar
//         $('.pg-bar').waypoint(function () {
//             $('.progress .progress-bar').each(function () {
//                 $(this).css('width', $(this).attr('aria-valuenow') + '%');
//             });
//         }, { offset: '80%' });

//         // Calender
//         $('#calender').datetimepicker({
//             inline: true,
//             format: 'L'
//         });

//         // Chart Global Color
//         Chart.defaults.color = '#6C7293';
//         Chart.defaults.borderColor = '#000000';
//     }, []);

//     const worldwideSalesData = {
//         labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
//         datasets: [
//             {
//                 label: 'USA',
//                 data: [15, 30, 55, 65, 60, 80, 95],
//                 backgroundColor: 'rgba(235, 22, 22, .7)'
//             },
//             {
//                 label: 'UK',
//                 data: [8, 35, 40, 60, 70, 55, 75],
//                 backgroundColor: 'rgba(235, 22, 22, .5)'
//             },
//             {
//                 label: 'AU',
//                 data: [12, 25, 45, 55, 65, 70, 60],
//                 backgroundColor: 'rgba(235, 22, 22, .3)'
//             }
//         ]
//     };

//     const salesRevenueData = {
//         labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
//         datasets: [
//             {
//                 label: 'Sales',
//                 data: [15, 30, 55, 45, 70, 65, 85],
//                 backgroundColor: 'rgba(235, 22, 22, .7)',
//                 fill: true
//             },
//             {
//                 label: 'Revenue',
//                 data: [99, 135, 170, 130, 190, 180, 270],
//                 backgroundColor: 'rgba(235, 22, 22, .5)',
//                 fill: true
//             }
//         ]
//     };

//     const lineChartData = {
//         labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
//         datasets: [
//             {
//                 label: 'Sales',
//                 fill: false,
//                 backgroundColor: 'rgba(235, 22, 22, .7)',
//                 data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
//             }
//         ]
//     };

//     const barChartData = {
//         labels: ['Italy', 'France', 'Spain', 'USA', 'Argentina'],
//         datasets: [
//             {
//                 backgroundColor: [
//                     'rgba(235, 22, 22, .7)',
//                     'rgba(235, 22, 22, .6)',
//                     'rgba(235, 22, 22, .5)',
//                     'rgba(235, 22, 22, .4)',
//                     'rgba(235, 22, 22, .3)'
//                 ],
//                 data: [55, 49, 44, 24, 15]
//             }
//         ]
//     };

//     const pieChartData = {
//         labels: ['Italy', 'France', 'Spain', 'USA', 'Argentina'],
//         datasets: [
//             {
//                 backgroundColor: [
//                     'rgba(235, 22, 22, .7)',
//                     'rgba(235, 22, 22, .6)',
//                     'rgba(235, 22, 22, .5)',
//                     'rgba(235, 22, 22, .4)',
//                     'rgba(235, 22, 22, .3)'
//                 ],
//                 data: [55, 49, 44, 24, 15]
//             }
//         ]
//     };

//     const doughnutChartData = {
//         labels: ['Italy', 'France', 'Spain', 'USA', 'Argentina'],
//         datasets: [
//             {
//                 backgroundColor: [
//                     'rgba(235, 22, 22, .7)',
//                     'rgba(235, 22, 22, .6)',
//                     'rgba(235, 22, 22, .5)',
//                     'rgba(235, 22, 22, .4)',
//                     'rgba(235, 22, 22, .3)'
//                 ],
//                 data: [55, 49, 44, 24, 15]
//             }
//         ]
//    )
// };
// };