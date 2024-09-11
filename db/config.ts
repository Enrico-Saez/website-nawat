import { defineDb, defineTable, column } from 'astro:db';

const Member = defineTable({
	columns: {
		id: column.number({ primaryKey: true, autoIncrement: true }),
		url: column.text({ unique: true }),
		name: column.text(),
		entry: column.date(),
		departure: column.date()
	}
});

export default defineDb({
	tables: { Member }
});
