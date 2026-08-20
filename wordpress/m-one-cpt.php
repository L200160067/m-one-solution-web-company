<?php
/**
 * Plugin Name: M-One Solution - CPT & Taxonomy Registration
 * Description: Registers all Custom Post Types, taxonomies, and required ACF fields for the M-One Solution Next.js frontend.
 * Version: 1.0.0
 * Author: M-One Solution
 * Text Domain: mone-solution
 *
 * HOW TO USE:
 * 1. Place this file in wp-content/plugins/m-one-cpt/m-one-cpt.php
 * 2. Activate "M-One Solution - CPT & Taxonomy Registration" from WordPress admin.
 * 3. Create a page with slug "company-setting" and fill in the ACF fields.
 * 4. Flush permalinks (Settings > Permalinks > Save Changes) after activation.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', 'mone_register_post_types_and_taxonomies', 10);

function mone_register_post_types_and_taxonomies(): void
{
    $labels_service = [
        'name'                  => __('Layanan', 'mone-solution'),
        'singular_name'         => __('Layanan', 'mone-solution'),
        'menu_name'             => __('Layanan', 'mone-solution'),
        'add_new'               => __('Tambah Layanan', 'mone-solution'),
        'add_new_item'          => __('Tambah Layanan Baru', 'mone-solution'),
        'edit_item'             => __('Edit Layanan', 'mone-solution'),
        'new_item'              => __('Layanan Baru', 'mone-solution'),
        'view_item'             => __('Lihat Layanan', 'mone-solution'),
        'search_items'          => __('Cari Layanan', 'mone-solution'),
        'not_found'             => __('Tidak ada layanan ditemukan', 'mone-solution'),
        'not_found_in_trash'    => __('Tidak ada layanan di tong sampah', 'mone-solution'),
    ];

    $labels_project = [
        'name'                  => __('Proyek', 'mone-solution'),
        'singular_name'         => __('Proyek', 'mone-solution'),
        'menu_name'             => __('Proyek', 'mone-solution'),
        'add_new'               => __('Tambah Proyek', 'mone-solution'),
        'add_new_item'          => __('Tambah Proyek Baru', 'mone-solution'),
        'edit_item'             => __('Edit Proyek', 'mone-solution'),
        'new_item'              => __('Proyek Baru', 'mone-solution'),
        'view_item'             => __('Lihat Proyek', 'mone-solution'),
        'search_items'          => __('Cari Proyek', 'mone-solution'),
        'not_found'             => __('Tidak ada proyek ditemukan', 'mone-solution'),
        'not_found_in_trash'    => __('Tidak ada proyek di tong sampah', 'mone-solution'),
    ];

    $labels_team = [
        'name'                  => __('Tim', 'mone-solution'),
        'singular_name'         => __('Anggota Tim', 'mone-solution'),
        'menu_name'             => __('Tim', 'mone-solution'),
        'add_new'               => __('Tambah Anggota', 'mone-solution'),
        'add_new_item'          => __('Tambah Anggota Baru', 'mone-solution'),
        'edit_item'             => __('Edit Anggota', 'mone-solution'),
        'new_item'              => __('Anggota Baru', 'mone-solution'),
        'view_item'             => __('Lihat Anggota', 'mone-solution'),
        'search_items'          => __('Cari Anggota', 'mone-solution'),
        'not_found'             => __('Tidak ada anggota ditemukan', 'mone-solution'),
        'not_found_in_trash'    => __('Tidak ada anggota di tong sampah', 'mone-solution'),
    ];

    $labels_testimonial = [
        'name'                  => __('Testimoni', 'mone-solution'),
        'singular_name'         => __('Testimoni', 'mone-solution'),
        'menu_name'             => __('Testimoni', 'mone-solution'),
        'add_new'               => __('Tambah Testimoni', 'mone-solution'),
        'add_new_item'          => __('Tambah Testimoni Baru', 'mone-solution'),
        'edit_item'             => __('Edit Testimoni', 'mone-solution'),
        'new_item'              => __('Testimoni Baru', 'mone-solution'),
        'view_item'             => __('Lihat Testimoni', 'mone-solution'),
        'search_items'          => __('Cari Testimoni', 'mone-solution'),
        'not_found'             => __('Tidak ada testimoni ditemukan', 'mone-solution'),
        'not_found_in_trash'    => __('Tidak ada testimoni di tong sampah', 'mone-solution'),
    ];

    $labels_partner = [
        'name'                  => __('Mitra', 'mone-solution'),
        'singular_name'         => __('Mitra', 'mone-solution'),
        'menu_name'             => __('Mitra', 'mone-solution'),
        'add_new'               => __('Tambah Mitra', 'mone-solution'),
        'add_new_item'          => __('Tambah Mitra Baru', 'mone-solution'),
        'edit_item'             => __('Edit Mitra', 'mone-solution'),
        'new_item'              => __('Mitra Baru', 'mone-solution'),
        'view_item'             => __('Lihat Mitra', 'mone-solution'),
        'search_items'          => __('Cari Mitra', 'mone-solution'),
        'not_found'             => __('Tidak ada mitra ditemukan', 'mone-solution'),
        'not_found_in_trash'    => __('Tidak ada mitra di tong sampah', 'mone-solution'),
    ];

    $labels_alumni = [
        'name'                  => __('Alumni', 'mone-solution'),
        'singular_name'         => __('Alumni', 'mone-solution'),
        'menu_name'             => __('Alumni', 'mone-solution'),
        'add_new'               => __('Tambah Alumni', 'mone-solution'),
        'add_new_item'          => __('Tambah Alumni Baru', 'mone-solution'),
        'edit_item'             => __('Edit Alumni', 'mone-solution'),
        'new_item'              => __('Alumni Baru', 'mone-solution'),
        'view_item'             => __('Lihat Alumni', 'mone-solution'),
        'search_items'          => __('Cari Alumni', 'mone-solution'),
        'not_found'             => __('Tidak ada alumni ditemukan', 'mone-solution'),
        'not_found_in_trash'    => __('Tidak ada alumni di tong sampah', 'mone-solution'),
    ];

    $common_args = [
        'public'              => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'rest_base'           => null,
        'supports'            => ['title', 'editor', 'thumbnail', 'excerpt', 'revisions'],
        'has_archive'         => true,
        'hierarchical'        => false,
        'menu_position'       => 25,
        'capability_type'     => 'post',
        'map_meta_cap'        => true,
    ];

    // Service
    register_post_type('service', array_merge($common_args, [
        'labels'      => $labels_service,
        'menu_icon'   => 'dashicons-admin-tools',
        'rewrite'     => ['slug' => 'layanan'],
        'rest_base'   => 'service',
        'taxonomies'  => ['service_category'],
    ]));

    // Project
    register_post_type('project', array_merge($common_args, [
        'labels'      => $labels_project,
        'menu_icon'   => 'dashicons-portfolio',
        'rewrite'     => ['slug' => 'project'],
        'rest_base'   => 'project',
        'taxonomies'  => ['project_category'],
    ]));

    // Team Member
    register_post_type('team-member', array_merge($common_args, [
        'labels'      => $labels_team,
        'menu_icon'   => 'dashicons-groups',
        'rewrite'     => ['slug' => 'team'],
        'rest_base'   => 'team-member',
    ]));

    // Testimonial
    register_post_type('testimonial', array_merge($common_args, [
        'labels'      => $labels_testimonial,
        'menu_icon'   => 'dashicons-format-quote',
        'rewrite'     => ['slug' => 'testimonial'],
        'rest_base'   => 'testimonial',
    ]));

    // Partner
    register_post_type('partner', array_merge($common_args, [
        'labels'      => $labels_partner,
        'menu_icon'   => 'dashicons-businessman',
        'rewrite'     => ['slug' => 'partner'],
        'rest_base'   => 'partner',
    ]));

    // Alumni
    register_post_type('alumni', array_merge($common_args, [
        'labels'      => $labels_alumni,
        'menu_icon'   => 'dashicons-welcome-learn-more',
        'rewrite'     => ['slug' => 'alumni'],
        'rest_base'   => 'alumni',
    ]));

    // Project Category taxonomy
    $labels_project_category = [
        'name'              => __('Kategori Proyek', 'mone-solution'),
        'singular_name'     => __('Kategori Proyek', 'mone-solution'),
        'search_items'      => __('Cari Kategori', 'mone-solution'),
        'all_items'         => __('Semua Kategori', 'mone-solution'),
        'edit_item'         => __('Edit Kategori', 'mone-solution'),
        'add_new_item'      => __('Tambah Kategori Baru', 'mone-solution'),
        'new_item_name'     => __('Nama Kategori Baru', 'mone-solution'),
        'menu_name'         => __('Kategori Proyek', 'mone-solution'),
    ];

    register_taxonomy('project_category', ['project'], [
        'labels'             => $labels_project_category,
        'hierarchical'       => true,
        'public'             => true,
        'show_ui'            => true,
        'show_admin_column'  => true,
        'show_in_rest'       => true,
        'rest_base'          => 'project_category',
        'rewrite'            => ['slug' => 'kategori-project'],
    ]);

    // Service Category taxonomy
    $labels_service_category = [
        'name'              => __('Kategori Layanan', 'mone-solution'),
        'singular_name'     => __('Kategori Layanan', 'mone-solution'),
        'search_items'      => __('Cari Kategori', 'mone-solution'),
        'all_items'         => __('Semua Kategori', 'mone-solution'),
        'edit_item'         => __('Edit Kategori', 'mone-solution'),
        'add_new_item'      => __('Tambah Kategori Baru', 'mone-solution'),
        'new_item_name'     => __('Nama Kategori Baru', 'mone-solution'),
        'menu_name'         => __('Kategori Layanan', 'mone-solution'),
    ];

    register_taxonomy('service_category', ['service'], [
        'labels'             => $labels_service_category,
        'hierarchical'       => true,
        'public'             => true,
        'show_ui'            => true,
        'show_admin_column'  => true,
        'show_in_rest'       => true,
        'rest_base'          => 'service_category',
        'rewrite'            => ['slug' => 'kategori-layanan'],
    ]);
}

/**
 * Register ACF field groups programmatically.
 * Requires Advanced Custom Fields Pro (or free version with local JSON disabled).
 *
 * If you prefer the ACF UI, you can delete this block and create the field groups manually.
 */
add_action('acf/init', 'mone_register_acf_fields');

function mone_register_acf_fields(): void
{
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    // Service fields
    acf_add_local_field_group([
        'key'                   => 'group_service',
        'title'                 => __('Detail Layanan', 'mone-solution'),
        'fields'                => [
            [
                'key'           => 'field_service_icon_name',
                'label'         => __('Nama Icon Lucide', 'mone-solution'),
                'name'          => 'icon_name',
                'type'          => 'text',
                'instructions'  => __('Contoh: Globe, Code, Smartphone, Layers.', 'mone-solution'),
            ],
            [
                'key'           => 'field_service_features',
                'label'         => __('Fitur', 'mone-solution'),
                'name'          => 'features',
                'type'          => 'textarea',
                'instructions'  => __('Satu fitur per baris.', 'mone-solution'),
            ],
            [
                'key'           => 'field_service_benefits',
                'label'         => __('Manfaat', 'mone-solution'),
                'name'          => 'benefits',
                'type'          => 'textarea',
                'instructions'  => __('Satu manfaat per baris.', 'mone-solution'),
            ],
            [
                'key'           => 'field_service_keywords',
                'label'         => __('Kata Kunci SEO', 'mone-solution'),
                'name'          => 'keywords',
                'type'          => 'text',
                'instructions'  => __('Pisahkan dengan koma. Contoh: website, sekolah, solo.', 'mone-solution'),
            ],
        ],
        'location' => [
            [
                [
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'service',
                ],
            ],
        ],
        'show_in_rest' => true,
    ]);

    // Project fields
    acf_add_local_field_group([
        'key'                   => 'group_project',
        'title'                 => __('Detail Proyek', 'mone-solution'),
        'fields'                => [
            [
                'key'           => 'field_project_client_name',
                'label'         => __('Nama Klien', 'mone-solution'),
                'name'          => 'client_name',
                'type'          => 'text',
            ],
            [
                'key'           => 'field_project_url',
                'label'         => __('URL Proyek', 'mone-solution'),
                'name'          => 'project_url',
                'type'          => 'url',
            ],
            [
                'key'           => 'field_project_featured',
                'label'         => __('Tampilkan sebagai unggulan', 'mone-solution'),
                'name'          => 'is_featured',
                'type'          => 'true_false',
                'default_value' => 0,
            ],
        ],
        'location' => [
            [
                [
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'project',
                ],
            ],
        ],
        'show_in_rest' => true,
    ]);

    // Team member fields
    acf_add_local_field_group([
        'key'                   => 'group_team',
        'title'                 => __('Profil Anggota Tim', 'mone-solution'),
        'fields'                => [
            [
                'key'           => 'field_team_role',
                'label'         => __('Jabatan', 'mone-solution'),
                'name'          => 'role',
                'type'          => 'text',
            ],
            [
                'key'           => 'field_team_linkedin',
                'label'         => __('LinkedIn URL', 'mone-solution'),
                'name'          => 'social_linkedin',
                'type'          => 'url',
            ],
            [
                'key'           => 'field_team_github',
                'label'         => __('GitHub URL', 'mone-solution'),
                'name'          => 'social_github',
                'type'          => 'url',
            ],
            [
                'key'           => 'field_team_instagram',
                'label'         => __('Instagram URL', 'mone-solution'),
                'name'          => 'social_instagram',
                'type'          => 'url',
            ],
        ],
        'location' => [
            [
                [
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'team-member',
                ],
            ],
        ],
        'show_in_rest' => true,
    ]);

    // Testimonial fields
    acf_add_local_field_group([
        'key'                   => 'group_testimonial',
        'title'                 => __('Detail Testimoni', 'mone-solution'),
        'fields'                => [
            [
                'key'           => 'field_testimonial_role',
                'label'         => __('Jabatan', 'mone-solution'),
                'name'          => 'role',
                'type'          => 'text',
            ],
            [
                'key'           => 'field_testimonial_company',
                'label'         => __('Perusahaan', 'mone-solution'),
                'name'          => 'company',
                'type'          => 'text',
            ],
            [
                'key'           => 'field_testimonial_rating',
                'label'         => __('Rating', 'mone-solution'),
                'name'          => 'rating',
                'type'          => 'number',
                'min'           => 1,
                'max'           => 5,
                'step'          => 1,
                'default_value' => 5,
            ],
        ],
        'location' => [
            [
                [
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'testimonial',
                ],
            ],
        ],
        'show_in_rest' => true,
    ]);

    // Alumni fields
    acf_add_local_field_group([
        'key'                   => 'group_alumni',
        'title'                 => __('Detail Alumni', 'mone-solution'),
        'fields'                => [
            [
                'key'           => 'field_alumni_school',
                'label'         => __('Sekolah', 'mone-solution'),
                'name'          => 'school',
                'type'          => 'text',
            ],
            [
                'key'           => 'field_alumni_batch',
                'label'         => __('Periode Angkatan', 'mone-solution'),
                'name'          => 'batch_period',
                'type'          => 'text',
                'instructions'  => __('Contoh: 2024/2025.', 'mone-solution'),
            ],
        ],
        'location' => [
            [
                [
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'alumni',
                ],
            ],
        ],
        'show_in_rest' => true,
    ]);

    // Company Settings page
    acf_add_local_field_group([
        'key'                   => 'group_company_settings',
        'title'                 => __('Pengaturan Perusahaan', 'mone-solution'),
        'fields'                => [
            [
                'key'           => 'field_settings_company_name',
                'label'         => __('Nama Perusahaan', 'mone-solution'),
                'name'          => 'company_name',
                'type'          => 'text',
            ],
            [
                'key'           => 'field_settings_company_address',
                'label'         => __('Alamat Perusahaan', 'mone-solution'),
                'name'          => 'company_address',
                'type'          => 'textarea',
            ],
            [
                'key'           => 'field_settings_contact_email',
                'label'         => __('Email Kontak', 'mone-solution'),
                'name'          => 'contact_email',
                'type'          => 'email',
            ],
            [
                'key'           => 'field_settings_contact_phone',
                'label'         => __('Telepon Kontak', 'mone-solution'),
                'name'          => 'contact_phone',
                'type'          => 'text',
            ],
            [
                'key'           => 'field_settings_whatsapp',
                'label'         => __('Nomor WhatsApp', 'mone-solution'),
                'name'          => 'whatsapp_number',
                'type'          => 'text',
                'instructions'  => __('Format internasional tanpa tanda plus. Contoh: 6285168850712.', 'mone-solution'),
            ],
            [
                'key'           => 'field_settings_facebook',
                'label'         => __('Facebook URL', 'mone-solution'),
                'name'          => 'facebook_url',
                'type'          => 'url',
            ],
            [
                'key'           => 'field_settings_instagram',
                'label'         => __('Instagram URL', 'mone-solution'),
                'name'          => 'instagram_url',
                'type'          => 'url',
            ],
            [
                'key'           => 'field_settings_tiktok',
                'label'         => __('TikTok URL', 'mone-solution'),
                'name'          => 'tiktok_url',
                'type'          => 'url',
            ],
            [
                'key'           => 'field_settings_youtube',
                'label'         => __('YouTube URL', 'mone-solution'),
                'name'          => 'youtube_url',
                'type'          => 'url',
            ],
            [
                'key'           => 'field_settings_linkedin',
                'label'         => __('LinkedIn URL', 'mone-solution'),
                'name'          => 'linkedin_url',
                'type'          => 'url',
            ],
        ],
        'location' => [
            [
                [
                    'param'    => 'post_type',
                    'operator' => '==',
                    'value'    => 'page',
                ],
                [
                    'param'    => 'page_slug',
                    'operator' => '==',
                    'value'    => 'company-setting',
                ],
            ],
        ],
        'show_in_rest' => true,
    ]);
}

/**
 * Ensure the company-setting page exists on plugin activation.
 */
register_activation_hook(__FILE__, 'mone_ensure_company_setting_page');

function mone_ensure_company_setting_page(): void
{
    $existing = get_page_by_path('company-setting', OBJECT, 'page');

    if (!$existing) {
        wp_insert_post([
            'post_title'   => __('Pengaturan Perusahaan', 'mone-solution'),
            'post_name'    => 'company-setting',
            'post_status'  => 'publish',
            'post_type'    => 'page',
            'post_content' => '',
        ]);
    }

    flush_rewrite_rules();
}

/**
 * Flush rewrite rules on plugin deactivation.
 */
register_deactivation_hook(__FILE__, 'mone_deactivation_flush');

function mone_deactivation_flush(): void
{
    flush_rewrite_rules();
}
