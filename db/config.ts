import { defineDb, defineTable, column } from 'astro:db';

const Member = defineTable({
	columns: {
		id: column.number({ primaryKey: true, autoIncrement: true }),
		url: column.text({ unique: true }),
		name: column.text(),
		entry_date: column.date(),
		departure_date: column.date()
	}
});

const RecruitmentProcess = defineTable({
	columns: {
		id: column.number({ primaryKey: true, autoIncrement: true }),
		name: column.text({}),
		link: column.text({ unique: true }),
		isActive: column.boolean()
	}
});

export default defineDb({
	tables: { Member, RecruitmentProcess }
});
