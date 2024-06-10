function skillsMember() {
  return {
    skills: ['React', 'Node', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    getSkills: function() {
      return this.skills;
    },
    addSkill: function(skill) {
      this.skills.push(skill);
    },
    removeSkill: function(skill) {
      this.skills = this.skills.filter(s => s !== skill);
    }
  }
}