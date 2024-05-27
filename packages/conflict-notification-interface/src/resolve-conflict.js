const conflictFields = (field) => ([
    {
      field: 'resolve-' + field,
      type: 'string',
      schema: {
        name: 'resolve-' + field,
        data_type: 'varchar',
        default_value: null,
        max_length: 255,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: false,
        generation_expression: null,
        is_nullable: true,
        is_unique: false,
        is_primary_key: false,
        has_auto_increment: false,
        foreign_key_column: null,
        foreign_key_table: null
      },
      meta: {
        field: 'resolve-' + field,
        special: null,
        interface: 'select-radio',
        options: {"choices":[{"text":"Current","value":"current"},{"text":"Incoming","value":"incoming"},{"text":"Custom","value":"custom"}]},
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 4,
        width: 'full',
        translations: null,
        note: null,
        conditions: null,
        required: false,
        group: field,
        validation: null,
        validation_message: null
      }
    },
    {
      field: 'custom-' + field,
      type: 'string',
      schema: {
        name: 'custom-' + field,
        data_type: 'varchar',
        default_value: null,
        max_length: 255,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: false,
        generation_expression: null,
        is_nullable: true,
        is_unique: false,
        is_primary_key: false,
        has_auto_increment: false,
        foreign_key_column: null,
        foreign_key_table: null
      },
      meta: {
        field: 'custom-' + field,
        special: null,
        interface: 'input',
        options: null,
        display: null,
        display_options: null,
        readonly: false,
        hidden: true,
        sort: 3,
        width: 'full',
        translations: null,
        note: null,
        conditions: [{"name":"test","rule":{"_and":[{"resolve":{"_eq":"custom"}}]},"hidden":false,"options":{"font":"sans-serif","trim":false,"masked":false,"clear":false,"slug":false}}],
        required: false,
        group: field,
        validation: null,
        validation_message: null
      }
    },
    {
      field: 'current-' + field,
      type: 'string',
      schema: {
        name: 'current-' + field,
        table: 'test',
        data_type: 'varchar',
        default_value: null,
        max_length: 255,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: false,
        generation_expression: null,
        is_nullable: true,
        is_unique: false,
        is_primary_key: false,
        has_auto_increment: false,
        foreign_key_column: null,
        foreign_key_table: null
      },
      meta: {
        field: 'current-' + field,
        special: null,
        interface: 'input',
        options: null,
        display: null,
        display_options: null,
        readonly: true,
        hidden: false,
        sort: 1,
        width: 'half',
        translations: null,
        note: null,
        conditions: null,
        required: false,
        group: field,
        validation: null,
        validation_message: null
      }
    },
    {
      field: 'incoming-' + field,
      type: 'string',
      schema: {
        name: 'incoming',
        data_type: 'varchar',
        default_value: null,
        max_length: 255,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: false,
        generation_expression: null,
        is_nullable: true,
        is_unique: false,
        is_primary_key: false,
        has_auto_increment: false,
        foreign_key_column: null,
        foreign_key_table: null
      },
      meta: {
        field: 'incoming-' + field,
        special: null,
        interface: 'input',
        options: null,
        display: null,
        display_options: null,
        readonly: true,
        hidden: false,
        sort: 2,
        width: 'half',
        translations: null,
        note: null,
        conditions: null,
        required: false,
        group: field,
        validation: null,
        validation_message: null
      }
    },
    {
      field: field,
      type: 'alias',
      schema: null,
      meta: {
        field: field,
        special: ["alias","no-data","group"],
        interface: 'group-detail',
        options: null,
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 2,
        width: 'full',
        translations: null,
        note: null,
        conditions: null,
        required: false,
        group: null,
        validation: null,
        validation_message: null
      }
    }
  ]);